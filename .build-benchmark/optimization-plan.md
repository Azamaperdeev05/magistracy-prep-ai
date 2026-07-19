# Xcode Build Optimization Plan


## Project Context

- **Project:** `/Users/azamat/Developer.noindex/GitHub/magistracy-prep-ai/ios/MagisCore.xcodeproj`
- **Scheme:** `MagisCore`
- **Configuration:** `Debug`
- **Destination:** `platform=iOS Simulator,name=iPhone 17`
- **Xcode:** Xcode 27.0 Build version 27A5209h
- **macOS:** macOS-27.0-arm64-arm-64bit
- **Date:** 2026-06-30T21:06:54.929683+00:00
- **Benchmark artifact:** `/Users/azamat/Developer.noindex/GitHub/magistracy-prep-ai/.build-benchmark/20260630T210605Z-magiscore.json`

## Baseline Benchmarks

| Metric | Clean | Incremental |
|--------|-------|-------------|
| Median | 24.620s | 11.009s |
| Min | 24.620s | 11.009s |
| Max | 24.620s | 11.009s |
| Runs | 1 | 1 |

### Clean Build Timing Summary

> **Note:** These are aggregated task times across all CPU cores. Because Xcode runs many tasks in parallel, these totals typically exceed the actual build wait time shown above. A large number here does not mean it is blocking your build.

| Category | Tasks | Seconds |
|----------|------:|--------:|
| SwiftCompile | 34 | 33.581s |
| CompileC | 100 | 21.330s |
| ScanDependencies | 62 | 9.899s |
| SwiftEmitModule | 5 | 4.223s |
| SwiftDriver | 5 | 3.192s |
| CompileAssetCatalogVariant | 1 | 1.344s |
| Ld | 30 | 1.290s |
| Copy | 69 | 0.803s |
| CodeSign | 26 | 0.632s |
| ExtractAppIntentsMetadata | 5 | 0.361s |
| ProcessInfoPlistFile | 19 | 0.220s |
| RegisterExecutionPolicyException | 19 | 0.193s |
| CpResource | 33 | 0.102s |
| CopySwiftLibs | 1 | 0.059s |
| Touch | 19 | 0.048s |
| WriteAuxiliaryFile | 245 | 0.034s |
| AppIntentsSSUTraining | 1 | 0.034s |
| GenerateAssetSymbols | 1 | 0.022s |
| ConstructStubExecutorLinkFileList | 1 | 0.010s |
| ProcessProductPackagingDER | 1 | 0.007s |
| SwiftDriver Compilation Requirements | 5 | 0.006s |
| SwiftDriver Compilation | 5 | 0.004s |
| SwiftMergeGeneratedHeaders | 5 | 0.002s |
| Validate | 1 | 0.002s |
| LinkAssetCatalog | 1 | 0.001s |
| CopyPlistFile | 1 | 0.001s |
| ProcessProductPackaging | 1 | 0.001s |

### Incremental Build Timing Summary

> **Note:** These are aggregated task times across all CPU cores. Because Xcode runs many tasks in parallel, these totals typically exceed the actual build wait time shown above. A large number here does not mean it is blocking your build.

| Category | Tasks | Seconds |
|----------|------:|--------:|
| Copy | 18 | 0.107s |
| ProcessInfoPlistFile | 19 | 0.085s |
| CopySwiftLibs | 1 | 0.016s |

## Build Settings Audit

### Debug Configuration

- [x] `SWIFT_COMPILATION_MODE`: `(unset)` (recommended: `singlefile`)
- [x] `SWIFT_OPTIMIZATION_LEVEL`: `-Onone` (recommended: `-Onone`)
- [x] `GCC_OPTIMIZATION_LEVEL`: `0` (recommended: `0`)
- [x] `ONLY_ACTIVE_ARCH`: `YES` (recommended: `YES`)
- [x] `DEBUG_INFORMATION_FORMAT`: `dwarf` (recommended: `dwarf`)
- [x] `ENABLE_TESTABILITY`: `YES` (recommended: `YES`)
- [ ] `EAGER_LINKING`: `(unset)` (recommended: `YES`)

### General (All Configurations)

- [ ] `COMPILATION_CACHE_ENABLE_CACHING`: `(unset)` (recommended: `YES`)

### Release Configuration

- [x] `SWIFT_COMPILATION_MODE`: `wholemodule` (recommended: `wholemodule`)
- [x] `SWIFT_OPTIMIZATION_LEVEL`: `-O` (recommended: `-O`)
- [ ] `GCC_OPTIMIZATION_LEVEL`: `(unset)` (recommended: `s`)
- [ ] `ONLY_ACTIVE_ARCH`: `(unset)` (recommended: `NO`)
- [x] `DEBUG_INFORMATION_FORMAT`: `dwarf-with-dsym` (recommended: `dwarf-with-dsym`)
- [ ] `ENABLE_TESTABILITY`: `(unset)` (recommended: `NO`)

### Cross-Target Consistency

- [x] `SWIFT_COMPILATION_MODE` is consistent across all targets
- [x] `SWIFT_OPTIMIZATION_LEVEL` is consistent across all targets
- [x] `ONLY_ACTIVE_ARCH` is consistent across all targets
- [x] `DEBUG_INFORMATION_FORMAT` is consistent across all targets

## Compilation Diagnostics

Threshold: 100ms | Total warnings: 1 | Function bodies: 0 | Expressions: 1

| Duration | Kind | File | Line | Name |
|---------:|------|------|-----:|------|
| 316ms | expression | ProfileSubjectConstants.swift | 8 | (expression) |

## Prioritized Recommendations

### 1. Set `EAGER_LINKING` to `YES` for Debug

**Category:** build-settings
**Evidence:** Current value: `(unset)`. Allows linker to start before all compilation finishes, reducing wall-clock time.
**Impact:** Medium
**Confidence:** High
**Risk:** Low

### 2. Enable `COMPILATION_CACHE_ENABLE_CACHING = YES`

**Category:** build-settings
**Evidence:** Current value: `(unset)`. Caches compilation results so repeat builds of unchanged inputs are served from cache. Measured 5-14% faster clean builds across tested projects; benefit compounds during branch switching and pulling changes.
**Impact:** High
**Confidence:** High
**Risk:** Low

### 3. Set `GCC_OPTIMIZATION_LEVEL` to `s` for Release

**Category:** build-settings
**Evidence:** Current value: `(unset)`. Optimizes C/ObjC for size in release.
**Impact:** Medium
**Confidence:** High
**Risk:** Low

### 4. Set `ONLY_ACTIVE_ARCH` to `NO` for Release

**Category:** build-settings
**Evidence:** Current value: `(unset)`. Release builds must include all architectures for distribution.
**Impact:** Medium
**Confidence:** High
**Risk:** Low

### 5. Set `ENABLE_TESTABILITY` to `NO` for Release

**Category:** build-settings
**Evidence:** Current value: `(unset)`. Removes internal-symbol export overhead from release builds.
**Impact:** Medium
**Confidence:** High
**Risk:** Low


## Approval Checklist

- [ ] **1. Set `EAGER_LINKING` to `YES` for Debug** -- Impact: Medium | Risk: Low
- [ ] **2. Enable `COMPILATION_CACHE_ENABLE_CACHING = YES`** -- Impact: High | Risk: Low
- [ ] **3. Set `GCC_OPTIMIZATION_LEVEL` to `s` for Release** -- Impact: Medium | Risk: Low
- [ ] **4. Set `ONLY_ACTIVE_ARCH` to `NO` for Release** -- Impact: Medium | Risk: Low
- [ ] **5. Set `ENABLE_TESTABILITY` to `NO` for Release** -- Impact: Medium | Risk: Low

## Next Steps

After implementing approved changes, re-benchmark with the same inputs:

```bash
python3 scripts/benchmark_builds.py \
  --project /Users/azamat/Developer.noindex/GitHub/magistracy-prep-ai/ios/MagisCore.xcodeproj \
  --scheme MagisCore \
  --configuration Debug \
  --destination "platform=iOS Simulator,name=iPhone 17" \
  --output-dir .build-benchmark
```

Compare the new wall-clock medians against the baseline. Report results as:
"Your [clean/incremental] build now takes X.Xs (was Y.Ys) -- Z.Zs faster/slower."
