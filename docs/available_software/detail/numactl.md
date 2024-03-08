---
hide:
  - toc
---

numactl
=======


The numactl program allows you to run your application program on specific cpu's and memory nodes. It does this by supplying a NUMA memory policy to the operating system before running your program. The libnuma library provides convenient ways for you to add NUMA memory policies into your own program.

https://github.com/numactl/numactl
# Available modules


The overview below shows which numactl installations are available per HPC-UGent Tier-2cluster, ordered based on software version (new to old).

To start using numactl, load one of these modules using a `module load` command like:

```shell
module load numactl/2.0.16-GCCcore-12.3.0
```

*(This data was automatically generated on Fri, 08 Mar 2024 at 11:18:27 CET)*  

| |/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_n1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_v1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen2|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen3|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/haswell|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/skylake_avx512|
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|numactl/2.0.16-GCCcore-12.3.0|x|x|x|x|x|x|x|x|
|numactl/2.0.16-GCCcore-12.2.0|x|x|x|x|x|x|x|x|
|numactl/2.0.14-GCCcore-11.3.0|x|x|x|x|x|x|x|x|
|numactl/2.0.14-GCCcore-11.2.0|x|x|x|x|x|x|x|x|
|numactl/2.0.14-GCCcore-10.3.0|x|x|x|x|x|x|x|x|
