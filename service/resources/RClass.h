/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include "DexClass.h"
#include "GlobalConfig.h"
#include "PassManager.h"

namespace resources {
inline bool is_potential_resid(int64_t id) {
  // Technically 0x7f010000 would be the lowest potential value, but whatever :p
  return id >= 0x7f000000 && id <= 0x7fffffff;
}

// Checks for naming conventions of Android build tooling generated R inner
// classes. Excludes any configured custom R class (since Buck's
// MergeAndroidResourcesStep output fields might not want to be considered for
// reachability).
bool is_non_customized_r_class(const DexClass* cls);

// Ensures that the R classes in the input app will stay somewhat undisturbed
// through optimizations, so they can be read/rewritten effectively. Meant to be
// called early before passes have began running.
void prepare_r_classes(DexStoresVector& stores,
                       const GlobalConfig& global_config);

using FieldArrayValues =
    std::map<DexFieldRef*, std::vector<uint32_t>, dexfields_comparator>;

// Helper class for reading autogenerated R class fields and clinit.
class RClassReader {
 public:
  explicit RClassReader(const ResourceConfig& global_resources_config)
      : m_global_resources_config(global_resources_config) {}

  explicit RClassReader(const GlobalConfig& global_config)
      : m_global_resources_config(
            *global_config.get_config_by_name<ResourceConfig>("resources")) {}

  bool is_r_class(const DexClass* cls) const;
  bool is_r_class(const DexFieldRef* field_ref) const;

  // For a given class, analyze the clinit and return information about array
  // fields and the values inside that array. Takes a known state of other
  // classes and returns new information (which presumably would then be used to
  // update the known info).
  FieldArrayValues analyze_clinit(
      DexClass* cls, const FieldArrayValues& known_field_values) const;

  // Ensures proper ordering of running a callback on R classes
  void ordered_r_class_iteration(
      const Scope& scope, const std::function<void(DexClass*)>& callback) const;

  // For given array fields, collect all possible resource id constants that
  // are known statically to be contained inside.
  void extract_resource_ids_from_static_arrays(
      const Scope& scope,
      const std::unordered_set<DexField*>& array_fields,
      std::unordered_set<uint32_t>* out_values) const;

 private:
  const ResourceConfig m_global_resources_config;
};

class RClassWriter {
 public:
  explicit RClassWriter(const ResourceConfig& global_resources_config)
      : m_global_resources_config(global_resources_config) {}

  explicit RClassWriter(const GlobalConfig& global_config)
      : m_global_resources_config(
            *global_config.get_config_by_name<ResourceConfig>("resources")) {}

  // Change static field values for all known R classes as specified in the map.
  // Any R field not found in the given map will be left alone.
  void remap_resource_class_scalars(
      DexStoresVector& stores,
      const std::map<uint32_t, uint32_t>& old_to_remapped_ids) const;

  // A supporting function for the below method. Exposed for testability.
  size_t remap_resource_class_clinit(
      const DexClass* cls,
      const FieldArrayValues& field_values,
      const std::map<uint32_t, uint32_t>& old_to_remapped_ids) const;

  // Search for array fields in known R classes and edit the array values to
  // reflect the given mapping.
  //
  // IMPORTANT NOTE: the given map is assumed to be exhaustive; if an array has
  // a value not contained in the given map that means to remove.
  //
  // EXAMPLE INPUT MAP: { 0x7f010001 -> 0x7f020000 }
  // Is taken to mean turn [0x7f010000, 0x7f010001] into either [0x7f020000] or
  // [0x0, 0x7f020000] depending on the context.
  void remap_resource_class_arrays(
      DexStoresVector& stores,
      const std::map<uint32_t, uint32_t>& old_to_remapped_ids) const;

 private:
  const ResourceConfig m_global_resources_config;
};
} // namespace resources
