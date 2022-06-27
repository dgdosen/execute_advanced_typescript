// function assert(condition: boolean) {
//   if (!condition) {
//     throw new Error('Assertion failed');
//   }
// }

// console.log(assert(1 + 1 === 2));
// // undefined

//console.log(assert(1 + 1 === 3));
////Error: Assertion failed

// const var1: number | string = ((): number | string => 1)();
// assert(typeof var1 === 'number');
// const var2: number = var1;
// // type error: Type 'string | number' is not assignable to type 'number'.
// //   Type 'string' is not assignable to type 'number'.

// const var1: number | string = ((): number | string => 1)();
// let var2: number;
// if (typeof var1 === 'number') {
//   var2 = var1;
// } else {
//   var2 = 0;
// }
// console.log(var2);
// // 1

// function assert(condition: boolean): asserts condition {
//   if (!condition) {
//     throw new Error('Assertion failed');
//   }
// }

// const var1: number | string = ((): number | string => 1)();
// assert(typeof var1 === 'number');
// const var2: number = var1;
// console.log(var2);
// // 1

// const var1: number | string = ((): number | string => 1)();
// assert(typeof var1 === 'number');
// const var2: string = var1;
// console.log(var2);
// // type error: Type 'number' is not assignable to type 'string'.

// function assertFalse(condition: boolean): asserts !condition {
//   if (condition) {
//     throw new Error('Assertion failed');
//   }
// }
// // syntax error: on line 7: '{' or ';' expected.

// function assertNumber(n: unknown): asserts n is number {
//   if (typeof n !== 'number') {
//     throw new Error("Value wasn't a number: " + n);
//   }
// }

// const n: number | undefined = ((): number | undefined => 5)();
// const n2: number = n;
// console.log(n2);
// // type error: Type 'number | undefined' is not assignable to type 'number'.
// //   Type 'undefined' is not assignable to type 'number'

// const n: number | undefined = ((): number | undefined => 5)();
// assertNumber(n);
// const n2: number = n;
// console.log(n2);
// // 5

// const n: number | undefined = ((): number | undefined => undefined)();
// assertNumber(n);
// const n2: number = n;
// console.log(n2);
// // Error: Value wasn't a number: undefined

// function assertString(s: unknown): asserts s is string {
//   if (typeof s !== 'string') {
//     throw new Error("Value isn't a string");
//   }
// }
// const s: string | number = ((): string | number => 'a string')();
// assertString(s);
// const s2: string = s;
// console.log(s2);
// // a string

function assertNumber(n: unknown): asserts n is number {
  if (typeof n !== 'string') {
    throw new Error("Value wasn't a number: " + n);
  }
}
const s: string = 'a string';
assertNumber(s);
const n: number = s;
console.log(n);
