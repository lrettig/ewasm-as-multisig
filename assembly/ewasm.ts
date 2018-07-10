// Ewasm-AssemblyScript API
// Author: Lane Rettig <lane@cryptonyc.org>

export class Address {
  constructor(
    public Address: i32,
  ) {}
}

export function read<T>(name: string): T {}
export function write<T>(name: string, value: T): void {}

// export type Address = i32

