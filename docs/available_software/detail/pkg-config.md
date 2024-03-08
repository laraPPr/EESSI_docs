---
hide:
  - toc
---

pkg-config
==========


pkg-config is a helper tool used when compiling applications and libraries. It helps you insert the correct compiler options on the command line so an application can use gcc -o test test.c `pkg-config --libs --cflags glib-2.0` for instance, rather than hard-coding values on where to find glib (or other libraries).

https://www.freedesktop.org/wiki/Software/pkg-config/
# Available modules


The overview below shows which pkg-config installations are available per HPC-UGent Tier-2cluster, ordered based on software version (new to old).

To start using pkg-config, load one of these modules using a `module load` command like:

```shell
module load pkg-config/0.29.2-GCCcore-11.3.0
```

*(This data was automatically generated on Fri, 08 Mar 2024 at 11:18:27 CET)*  

| |/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_n1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/aarch64/neoverse_v1|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/generic|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen2|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/amd/zen3|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/haswell|/cvmfs/pilot.eessi-hpc.org/versions/2023.06/software/linux/x86_64/intel/skylake_avx512|
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|pkg-config/0.29.2-GCCcore-11.3.0|x|x|x|x|x|x|x|x|
|pkg-config/0.29.2-GCCcore-11.2.0|x|x|x|x|x|x|x|x|
|pkg-config/0.29.2-GCCcore-10.3.0|x|x|x|x|x|x|x|x|
