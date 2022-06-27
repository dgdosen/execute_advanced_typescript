// type BNS = boolean | number | string;
// function returnNumber(): BNS {
//   return 1;
// }
// const n: number = returnNumber();
// console.log(n);
// // type error: Type 'BNS' is not assignable to type 'number'.

// type BNS = boolean | number | string;
// function returnNumber(): Exclude<BNS, boolean | string> {
//   return 1;
// }
// const n: number = returnNumber();
// console.log(n);
// // 1

// type StringToNull<T> = T extends string ? null : T;
// function returnsNullOrNumber(): null | number {
//   return 1;
// }
// const n: StringToNull<string | number> = returnsNullOrNumber();
// console.log(n);
// // 1

// function returnsNullOrNumber(): null | number {
//   return null;
// }
// const n: StringToNull<string | number> = returnsNullOrNumber();
// console.log(n);

// function returnsNullOrNumber(): null | string {
//   return null;
// }
// const n: StringToNull<string | number> = returnsNullOrNumber();
// console.log(n);
// // type error: Type 'string | null' is not assignable to type 'number | null'. Type 'string' is not assignable to type 'number'.

// type OurExclude<Original, ToExclude> = Original extends ToExclude
//   ? never
//   : Original;
// type BNS = boolean | number | string;

// function returnNumber(): OurExclude<BNS, boolean | string> {
//   return 1;
// }
// const n: number = returnNumber();
// console.log(n);
// // 1

// function returnNumber(): OurExclude<BNS, boolean> {
//   return 1;
// }
// const n: number = returnNumber();
// console.log(n);
// // // type error: Type 'string | number' is not assignable to type 'number'.
// //   Type 'string' is not assignable to type 'number'.

// type RemoveStringsFromUnion<T> = T | never;
type RemoveStringsFromUnion<T> = T extends string ? never : T;
const n1: RemoveStringsFromUnion<string | number> = 11;
const n2: number = n1;
const b1: RemoveStringsFromUnion<string | boolean> = true;
const b2: boolean = b1;
console.log([n2, b2]);
