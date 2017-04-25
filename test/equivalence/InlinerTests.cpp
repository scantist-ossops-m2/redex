/**
 * Copyright (c) 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#include <string>

#include "Creators.h"
#include "DexAsm.h"
#include "TestGenerator.h"
#include "Transform.h"
#include "Util.h"

class InlinerTestAliasedInputs : public EquivalenceTest {
  DexMethod* m_callee;
 public:
  virtual std::string test_name() {
    return "InlinerTestAliasedInputs";
  }

  virtual void setup(DexClass* cls) {
    auto ret = DexType::make_type("I");
    auto arg = DexType::make_type("I");
    auto args = DexTypeList::make_type_list({arg, arg});
    auto proto = DexProto::make_proto(ret, args); // I(I, I)
    m_callee =
        DexMethod::make_method(cls->get_type(),
                               DexString::make_string("callee_" + test_name()),
                               proto);
    m_callee->make_concrete(ACC_PUBLIC | ACC_STATIC, false);
    {
      using namespace dex_asm;
      auto mt = m_callee->get_code();
      // note that this method will not behave the same way if v0 and v1 get
      // mapped to the same register
      mt->push_back(dasm(OPCODE_ADD_INT, {0_v, 0_v, 1_v}));
      mt->push_back(dasm(OPCODE_ADD_INT, {1_v, 1_v, 0_v}));
      mt->push_back(dasm(OPCODE_RETURN, {1_v}));
      m_callee->get_code()->set_registers_size(2);
      m_callee->get_code()->set_ins_size(2);
    }
    cls->add_method(m_callee);
  }

  virtual void build_method(DexMethod* m) {
    using namespace dex_asm;
    auto mt = m->get_code();
    mt->push_back(dasm(OPCODE_CONST_16, {0_v, 0x1_L}));

    auto invoke = new IRInstruction(OPCODE_INVOKE_STATIC);
    invoke->set_method(m_callee)->set_arg_word_count(2);
    // reusing the same register for two separate arguments
    invoke->set_src(0, 0);
    invoke->set_src(1, 0);
    mt->push_back(invoke);

    m->get_code()->set_registers_size(2);
    mt->push_back(dasm(OPCODE_MOVE_RESULT, {1_v}));
    mt->push_back(dasm(OPCODE_RETURN, {1_v}));
  }

  virtual void transform_method(DexMethod* m) {
    IRInstruction* mop = nullptr;
    for (const auto& mie : InstructionIterable(m->get_code())) {
      auto insn = mie.insn;
      if (insn->opcode() == OPCODE_INVOKE_STATIC) {
        mop = insn;
        assert(mop->get_method() == m_callee);
        break;
      }
    }
    InlineContext context(m, true /* use_liveness */);
    IRCode::inline_method(context, m_callee, mop, /* no_exceed_16regs */ true);
  }
};

REGISTER_TEST(InlinerTestAliasedInputs);

class InlinerTestLargeIfOffset : public EquivalenceTest {
  const size_t NOP_COUNT = 1 << 15;
 protected:
  DexMethod* m_callee;
 public:
  virtual void setup(DexClass* cls) {
    auto ret = DexType::make_type("V");
    auto args = DexTypeList::make_type_list({});
    auto proto = DexProto::make_proto(ret, args); // V()
    m_callee =
        DexMethod::make_method(cls->get_type(),
                               DexString::make_string("callee_" + test_name()),
                               proto);
    m_callee->make_concrete(ACC_PUBLIC | ACC_STATIC, false);
    using namespace dex_asm;
    auto mt = m_callee->get_code();
    // if-* opcodes store their jump offset as a 16-bit signed int. Let's
    // insert enough opcodes such that the offset overflows that width.
    // These are essentially NOPs, but we don't use actual NOPs because
    // Transform filters them out.
    mt->push_back(dasm(OPCODE_CONST_4, {0_v, 0_L}));
    for (size_t i = 0; i < NOP_COUNT; ++i) {
      mt->push_back(dasm(OPCODE_MOVE, {0_v, 0_v}));
    }
    mt->push_back(dasm(OPCODE_RETURN_VOID));
    m_callee->get_code()->set_registers_size(1);
    m_callee->get_code()->set_ins_size(0);
    cls->add_method(m_callee);
  }

  virtual DexOpcode if_op() = 0;

  virtual void build_method(DexMethod* m) {
    using namespace dex_asm;
    auto mt = m->get_code();
    mt->push_back(dasm(OPCODE_CONST_4, {1_v, 0_L}));
    mt->push_back(dasm(OPCODE_CONST_4, {2_v, 1_L}));
    // if block
    auto branch = new MethodItemEntry(dasm(if_op(), {1_v}));
    mt->push_back(*branch);
    auto invoke = new IRInstruction(OPCODE_INVOKE_STATIC);
    invoke->set_method(m_callee)->set_arg_word_count(0);
    mt->push_back(invoke);
    mt->push_back(dasm(OPCODE_ADD_INT, {1_v, 1_v, 2_v}));
    // fallthrough to main block
    auto target = new BranchTarget();
    target->type = BRANCH_SIMPLE;
    target->src = branch;
    mt->push_back(target);
    mt->push_back(dasm(OPCODE_SUB_INT, {1_v, 1_v, 2_v}));
    mt->push_back(dasm(OPCODE_RETURN, {1_v}));
    m->get_code()->set_registers_size(3);
    m->get_code()->set_ins_size(0);
  }

  virtual void transform_method(DexMethod* m) {
    IRInstruction* mop = nullptr;
    for (const auto& mie : InstructionIterable(m->get_code())) {
      auto insn = mie.insn;
      if (insn->opcode() == OPCODE_INVOKE_STATIC) {
        mop = insn;
        assert(mop->get_method() == m_callee);
        break;
      }
    }
    assert(mop != nullptr);
    InlineContext context(m, true /* use_liveness */);
    IRCode::inline_method(context, m_callee, mop, /* no_exceed_16regs */ true);
    // make sure we actually bloated the method
    always_assert(m->get_code()->count_opcodes() > NOP_COUNT);
  }
};

class InlinerTestLargeIfOffsetTrueBranch : public InlinerTestLargeIfOffset {
 public:
  virtual std::string test_name() {
    return "InlinerTestLargeIfOffsetTrueBranch";
  }

  virtual DexOpcode if_op() {
    return OPCODE_IF_NEZ;
  }
};

REGISTER_TEST(InlinerTestLargeIfOffsetTrueBranch);

class InlinerTestLargeIfOffsetFalseBranch : public InlinerTestLargeIfOffset {
 public:
  virtual std::string test_name() {
    return "InlinerTestLargeIfOffsetFalseBranch";
  }

  virtual DexOpcode if_op() {
    return OPCODE_IF_EQZ;
  }
};

REGISTER_TEST(InlinerTestLargeIfOffsetFalseBranch);
