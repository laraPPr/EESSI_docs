---
hide:
  - toc
---

LLVM
====


The LLVM Core libraries provide a modern source- and target-independent optimizer, along with code generation support for many popular CPUs (as well as some less common ones!) These libraries are built around a well specified code representation known as the LLVM intermediate representation ("LLVM IR"). The LLVM Core libraries are well documented, and it is particularly easy to invent your own language (or port an existing compiler) to use LLVM as an optimizer and code generator.

https://llvm.org/
# Available modules


The overview below shows which LLVM installations are available per HPC-UGent Tier-2cluster, ordered based on software version (new to old).

To start using LLVM, load one of these modules using a `module load` command like:

```shell
module load LLVM/14.0.3-GCCcore-11.3.0
```

*(This data was automatically generated on Fri, 08 Mar 2024 at 11:18:27 CET)*  

| |/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_n1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_v1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen2|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen3|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/haswell|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/skylake_avx512|
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|LLVM/14.0.3-GCCcore-11.3.0|x|x|x|x|x|x|x|x|
|LLVM/12.0.1-GCCcore-11.2.0|x|x|x|x|x|x|x|x|
|LLVM/11.1.0-GCCcore-10.3.0|x|x|x|x|x|x|x|x|
