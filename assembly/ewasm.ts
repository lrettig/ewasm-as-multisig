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
  init(): void {}
}

export function read<T>(name: string): T {}
export function write<T>(name: string, value: T): void {}

// export type Address = i32

