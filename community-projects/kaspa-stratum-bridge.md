---

---
# Kaspa Stratum Bridge

## Project Information
<!---
Feel free to add/remove fields as you see fit.
--->
- Creator: rdugan
- Category: Mining
- Programming Language: Go
- License: MIT
## Links
- [GitHub](https://github.com/rdugan/kaspa-stratum-bridge)

## Project Description

### Kaspa Stratum Adapter

This is a lightweight daemon that allows mining to a local (or remote) kaspa node using stratum-base miners.

This daemon is confirmed working with the miners below in both kaspa-only and dual-mining modes (for those that support it) on Windows/MacOs/Linux/HiveOs.
* bzminer
* lolminer
* srbminer
* teamreadminer
* IceRiver ASICs

Hive setup: [detailed instructions here](https://github.com/rdugan/kaspa-stratum-bridge/blob/main/docs/hive-setup.md)

Discord discussions/issues: [here](https://discord.com/channels/599153230659846165/1025501807570600027)

Huge shoutout to https://github.com/KaffinPX/KStratum for the inspiration

#### Features:

- Shares-based work allocation with miner-like periodic stat output

```
===============================================================================
  worker name   |  avg hashrate  |   acc/stl/inv  |    blocks    |    uptime   
-------------------------------------------------------------------------------
 octo12_1       |      43.36GH/s |       1183/0/0 |            1 |      53m18s
 pc             |     758.97MH/s |       1017/0/0 |            0 |      52m54s
-------------------------------------------------------------------------------
                |      44.12GH/s |       2200/0/0 |            1 |      53m20s
========================================================== ks_bridge_v1.1.7 ===
```


- Variable difficulty engine (vardiff)

Multiple miners with significantly different hashrates can be connected to the same stratum bridge instance, and the appropriate difficulty will automatically be decided for each one.  Default settings target 20 shares/min, resulting in high confidence decisions regarding difficulty adjustments, and stable measured hashrates (1hr avg hashrates within +/- 10% of actual).


- Optional monitoring UI

Detailed setup [instructions](https://github.com/rdugan/kaspa-stratum-bridge/blob/main/docs/monitoring-setup.md)

![Monitoring Dashboard](https://github.com/rdugan/kaspa-stratum-bridge/raw/main/docs/images/dashboard.png)


- Prometheus API

If the app is run with the `-prom={port}` flag the application will host stats on the port specified by `{port}`, these stats are documented in the file prom.go. This is intended to be use by prometheus but the stats can be fetched and used independently if desired. `curl http://localhost:2114/metrics | grep ks_` will get a listing of current stats. All published stats have a `ks_` prefix for ease of use.

```
user:~$ curl http://localhost:2114/metrics | grep ks_
# HELP ks_estimated_network_hashrate_gauge Gauge representing the estimated network hashrate
# TYPE ks_estimated_network_hashrate_gauge gauge
ks_estimated_network_hashrate_gauge 2.43428982879776e+14
# HELP ks_network_block_count Gauge representing the network block count
# TYPE ks_network_block_count gauge
ks_network_block_count 271966
# HELP ks_network_difficulty_gauge Gauge representing the network difficulty
# TYPE ks_network_difficulty_gauge gauge
ks_network_difficulty_gauge 1.2526479386202519e+14
# HELP ks_valid_share_counter Number of shares found by worker over time
# TYPE ks_valid_share_counter counter
ks_valid_share_counter{ip="192.168.0.17",miner="SRBMiner-MULTI/1.0.8",wallet="kaspa:qzk3uh2twkhu0fmuq50mdy3r2yzuwqvstq745hxs7tet25hfd4egcafcdmpdl",worker="002"} 276
ks_valid_share_counter{ip="192.168.0.24",miner="BzMiner-v11.1.0",wallet="kaspa:qzk3uh2twkhu0fmuq50mdy3r2yzuwqvstq745hxs7tet25hfd4egcafcdmpdl",worker="003"} 43
ks_valid_share_counter{ip="192.168.0.65",miner="BzMiner-v11.1.0",wallet="kaspa:qzk3uh2twkhu0fmuq50mdy3r2yzuwqvstq745hxs7tet25hfd4egcafcdmpdl",worker="001"} 307
# HELP ks_worker_job_counter Number of jobs sent to the miner by worker over time
# TYPE ks_worker_job_counter counter
ks_worker_job_counter{ip="192.168.0.17",miner="SRBMiner-MULTI/1.0.8",wallet="kaspa:qzk3uh2twkhu0fmuq50mdy3r2yzuwqvstq745hxs7tet25hfd4egcafcdmpdl",worker="002"} 3471
ks_worker_job_counter{ip="192.168.0.24",miner="BzMiner-v11.1.0",wallet="kaspa:qzk3uh2twkhu0fmuq50mdy3r2yzuwqvstq745hxs7tet25hfd4egcafcdmpdl",worker="003"} 3399
ks_worker_job_counter{ip="192.168.0.65",miner="BzMiner-v11.1.0",wallet="kaspa:qzk3uh2twkhu0fmuq50mdy3r2yzuwqvstq745hxs7tet25hfd4egcafcdmpdl",worker="001"} 3425

```
