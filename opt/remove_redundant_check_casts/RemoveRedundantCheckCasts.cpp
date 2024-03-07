/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "RemoveRedundantCheckCasts.h"

#include "CheckCastAnalysis.h"
#include "CheckCastTransform.h"
#include "ConfigFiles.h"
#include "DexClass.h"
#include "PassManager.h"
#include "Walkers.h"

namespace check_casts {

impl::Stats remove_redundant_check_casts(const CheckCastConfig& config,
                                         DexMethod* method,
                                         const api::AndroidSDK& android_sdk) {
  if (!method || !method->get_code() || method->rstate.no_optimizations()) {
    return impl::Stats{};
  }

  auto* code = method->get_code();
  always_assert(code->editable_cfg_built());
  impl::CheckCastAnalysis analysis(config, method, android_sdk);
  auto casts = analysis.collect_redundant_checks_replacement();
  auto stats = impl::apply(method, casts);

  return stats;
}

void RemoveRedundantCheckCastsPass::bind_config() {
  bind("weaken", m_config.weaken, m_config.weaken);
}

void RemoveRedundantCheckCastsPass::run_pass(DexStoresVector& stores,
                                             ConfigFiles& conf,
                                             PassManager& mgr) {
  auto scope = build_class_scope(stores);
  const auto& android_sdk =
      conf.get_android_sdk_api(mgr.get_redex_options().min_sdk);

  auto stats =
      walk::parallel::methods<impl::Stats>(scope, [&](DexMethod* method) {
        return remove_redundant_check_casts(m_config, method, android_sdk);
      });

  mgr.set_metric("num_removed_casts", stats.removed_casts);
  mgr.set_metric("num_replaced_casts", stats.replaced_casts);
  mgr.set_metric("num_weakened_casts", stats.weakened_casts);
}

static RemoveRedundantCheckCastsPass s_pass;

} // namespace check_casts
