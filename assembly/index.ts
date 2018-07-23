// Ewasm-AssemblyScript proof of concept multisig
// Author: Lane Rettig <lane@cryptonyc.org>
// DO NOT USE IN PRODUCTION. THIS CODE HAS NOT BEEN AUDITED.
// All code offered without warranty.
// Inspired by https://github.com/gnosis/MultiSigWallet

import {
  Address,
  Contract,
  read,
  assert,
  write,
// } from "ewasm"
} from "../../ewasm-as"

// Constants
const MAX_OWNERS: i32 = 50

@ewasm
class MultiSigWalletFactory extends Contract {
  // Create a new wallet. Takes a list of owners and a minimum required number
  // of signatures, returns address of new wallet contract.
  create(owners: Address[], required: i32): Address {
    var wallet = new MultiSigWallet(owners, required)
    return wallet._address
  }
}

class MultiSigWallet extends Contract {
  // Contract constructor sets initial owners and required number of confirmations
  constructor(
    owners: Address[],
    required: i32,
  ) {
    var isOwner: Set<Address> = read<Set<Address>>("isOwner")
    for (var i:i32 = 0; i < owners.length; i++) {
      var o:Address = owners[i]
      assert(!isOwner.has(o))
      assert(o)
      isOwner.add(o)
    }
    write<Set>("isOwner", isOwner)
  }

  addOwner(
    owner: Address,
  ): void {}

  removeOwner(
    owner: Address,
  ):void {}

  changeRequirement(
    required: i32,
  ):void {}

  confirmTransaction(
    txid: i32,
  ):void {}

  revokeConfirmation(
    txid: i32,
  ):void {}

  executeTransaction(
    txid: i32,
  ):void {}

  isConfirmed(
    txid: i32,
  ):bool {}
}

