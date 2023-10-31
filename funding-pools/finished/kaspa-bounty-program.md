# Kaspa Bounty Program

## Funding Pool Status
<!---
Feel free to add/remove fields as you see fit.
--->
- Creator: Lolliedieb
- Goal: funded by the creator - 2 ETH
- Remaining time: Ended!
## Description

### Call for submissions

for the occasion, I hereby award 2 Eth to the first person to post a working Kaspa gRPC to stratum adapter open source on github.

### Conditions

It should be written in a common programming language or even scripting language and be as low-threshold as possible in the libraries needed (a single call to apt-get or even to pip install would be ok, but please no more). Furthermore executable under Linux and Windows. The behavior of a pool should be simulated, that means that several mining clients can be connected and that for each connected client an extra nonce is sent, but in any case a difficulty. It can be assumed that all connected clients want to mine the same wallet address - this should be passed as a parameter at the start.

The goal of the whole thing is to make stratum based mining software that does not have a native grpc interface compatible with kaspa solo mining.

If you have any questions about the desired format please drop me a short message."

### Updates
The bounty program above is closed because the goal is reached!

Here's the citation: 

```
today in the morning I already got an almost perfect submission. a bit later a 2nd that also looks done.
 
Therefore I would say acceptance of more is closed right now, will review the two the next hours and see if we have a clear #1 and #2 or a split 1st ... I already decided to give 2nd also 1Eth when its submitted closely enough ... well and the two are obviously independent, cause one is in rust and the other in node.js

I'm very happy that it worked out so quickly and even happier that there are two different entries that both look great to me - it's always good to have a little choice. Once I have ensured that I can connect to both with at least 2-3 mining rigs and have successfully created testnet blocks with them I will post the links to the repos. I think it's cool that it worked out!

As far as I can see the operation of both is also very easy. One builds with cargo, the other you will probably be able to install with npm. To build it, each are one-liners and also the usage is limited to the desired node address, stratum port and wallet address to be mined to. Much low-threshold it almost can not be, that should be good for all...```
