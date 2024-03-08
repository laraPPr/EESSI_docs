---
hide:
  - toc
---

libunwind
=========


The primary goal of libunwind is to define a portable and efficient C programming interface (API) to determine the call-chain of a program. The API additionally provides the means to manipulate the preserved (callee-saved) state of each call-frame and to resume execution at any point in the call-chain (non-local goto). The API supports both local (same-process) and remote (across-process) operation. As such, the API is useful in a number of applications

https://www.nongnu.org/libunwind/
# Available modules


The overview below shows which libunwind installations are available per HPC-UGent Tier-2cluster, ordered based on software version (new to old).

To start using libunwind, load one of these modules using a `module load` command like:

```shell
module load libunwind/1.6.2-GCCcore-11.3.0
```

*(This data was automatically generated on Fri, 08 Mar 2024 at 11:18:27 CET)*  

| |/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_n1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_v1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen2|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen3|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/haswell|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/skylake_avx512|
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|libunwind/1.6.2-GCCcore-11.3.0|x|x|x|x|x|x|x|x|
|libunwind/1.5.0-GCCcore-11.2.0|x|x|x|x|x|x|x|x|
|libunwind/1.4.0-GCCcore-10.3.0|x|x|x|x|x|x|x|x|