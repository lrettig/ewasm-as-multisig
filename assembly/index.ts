// Ewasm-AssemblyScript proof of concept multisig
// Author: Lane Rettig <lane@cryptonyc.org>
// DO NOT USE IN PRODUCTION. THIS CODE HAS NOT BEEN AUDITED.
// All code offered without warranty.

import { Address } from "./ewasm"

// Create a new wallet. Takes a list of owners and a minimum required number
// of signatures, returns address of new wallet contract.
function create(owners: Address[], required: i32): Address {
  wallet = new MultiSigWallet(owners, required)
  return wallet
}

class MultiSigWallet {
  constructor(
    owners: Address[],
    required: i32,
  ) {}
}


