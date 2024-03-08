---
hide:
  - toc
---

GObject-Introspection
=====================


GObject introspection is a middleware layer between C libraries (using GObject) and language bindings. The C library can be scanned at compile time and generate a metadata file, in addition to the actual native C library. Then at runtime, language bindings can read this metadata and automatically provide bindings to call into the C library.

https://gi.readthedocs.io/en/latest/
# Available modules


The overview below shows which GObject-Introspection installations are available per HPC-UGent Tier-2cluster, ordered based on software version (new to old).

To start using GObject-Introspection, load one of these modules using a `module load` command like:

```shell
module load GObject-Introspection/1.68.0-GCCcore-11.2.0
```

*(This data was automatically generated on Fri, 08 Mar 2024 at 11:18:27 CET)*  

| |/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_n1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_v1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen2|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen3|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/haswell|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/skylake_avx512|
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|GObject-Introspection/1.68.0-GCCcore-11.2.0|x|x|x|x|x|x|x|x|
|GObject-Introspection/1.68.0-GCCcore-10.3.0|x|x|x|x|x|x|x|x|
