---

---
# KDX

## Project Information
<!---
Feel free to add/remove fields as you see fit.
--->
- Creator: @surindersingh & @aspect76
- Category: Wallets
- Created in 2020
- Programming Language:

## Links
- [GitHub](https://github.com/aspectron/kdx)

## Project Description
KDX is a dedicated desktop process manager for [Kaspa node](https://github.com/kaspanet/kaspad).


KDX offers a miniature console using which user can re-build the Kaspa stack, upgrading Kaspa to the latest version directly from GitHub. The build process is automated via a series of scripts that, if
needed, fetch required tools (git, go, gcc) and build Kaspa on the host computer (the build includes various Kaspa utilities including `txgen`, `wallet`, `kaspactl` and others and can be executed against any specific Git branch).  KDX console can also be used to migrate a Kasparov database if building a version with an updated database schema.

KDX process configuration (available via a simple JSON editor) allows user to specify command-line arguments for executables, as such it is possible to configure KDX to run multiple instances of Kaspa or potentially run multiple networks simultaneously (provided Kaspa nodes do not proactively auto-discover each-other)

Like many desktop applications, KDX can run in the tray bar, out of the way.

KDX is built using [NWJS](https://nwjs.io) and is compatible with Windows, Linux and Mac OS X.

## Screenshots
![One](https://i.imgur.com/cBwEnFp.png)
![Two](https://i.imgur.com/bFrqPBX.png)
