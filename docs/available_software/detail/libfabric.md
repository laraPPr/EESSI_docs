---
hide:
  - toc
---

libfabric
=========


Libfabric is a core component of OFI. It is the library that defines and exportsthe user-space API of OFI, and is typically the only software that applicationsdeal with directly. It works in conjunction with provider libraries, which areoften integrated directly into libfabric.

https://ofiwg.github.io/libfabric/
# Available modules


The overview below shows which libfabric installations are available per HPC-UGent Tier-2cluster, ordered based on software version (new to old).

To start using libfabric, load one of these modules using a `module load` command like:

```shell
module load libfabric/1.18.0-GCCcore-12.3.0
```

*(This data was automatically generated on Fri, 08 Mar 2024 at 11:18:27 CET)*  

| |/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_n1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_v1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen2|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen3|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/haswell|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/skylake_avx512|
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|libfabric/1.18.0-GCCcore-12.3.0|x|x|x|x|x|x|x|x|
|libfabric/1.16.1-GCCcore-12.2.0|x|x|x|x|x|x|x|x|
|libfabric/1.15.1-GCCcore-11.3.0|x|x|x|x|x|x|x|x|
|libfabric/1.13.2-GCCcore-11.2.0|x|x|x|x|x|x|x|x|
|libfabric/1.12.1-GCCcore-10.3.0|x|x|x|x|x|x|x|x|
