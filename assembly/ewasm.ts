// Ewasm-AssemblyScript API
// Author: Lane Rettig <lane@cryptonyc.org>

// import "allocator/arena"
// import "allocator/tlsf"

export class Address {
  constructor(
    public Address: i32,
  ) {}
}

export class Contract {
  init(): Address { return new Address(0) }
}

export function read<T>(name: string): T { return load<T>(0) }
export function write<T>(name: string, value: T): void {}

export function assert(premise: bool): bool {
  if (!premise)
    throw new Error("Assertion failure")
}

// export type Address = i32

