// function double(n: number | string) {
//   if (typeof n === 'number') {
//     return n * 2;
//   } else {
//     const doubled = Number(n) * 2;
//     return doubled.toString();
//   }
// }
// console.log([double(5), double('6')]);
// // [10, '12']

// const n: number = double(5);
// console.log(n);
// // type error: Type 'string | number' is not assignable to type 'number'.

// const n: string = double('6');
// n;
// // type error: Type 'string | number' is not assignable to type 'string'.

// function double(n: number): number;
// function double(s: string): string;
// function double(n: number | string): number | string {
//   if (typeof n === 'number') {
//     return n * 2;
//   } else {
//     const doubled = Number(n) * 2;
//     return doubled.toString();
//   }
// }

// // const n: number = double(5);
// // console.log(n);
// // // 10

// // const s: string = double('6');
// // console.log(s);
// // // '12'

// function double(n: number): number;
// function double(s: string): string;
// function double(n: number | string): number {
//   if (typeof n === 'number') {
//     return n * 2;
//   } else {
//     const doubled = Number(n) * 2;
//     return doubled.toString();
//   }
// }
// double(5);
//type error: This overload signature is not compatible with its implementation signature.

// function double(n: number): number;
// function double(s: string): string;
// function double(n: number | string): number | string {
//   if (typeof n === 'number') {
//     return n * 2;
//   } else {
//     const doubled = Number(n) * 2;
//     return doubled;
//   }
// }
// // This is supposed to be a string, but it ends up holding a number!
// const s: string = double('6');
// console.log(s);
// // 12
function pluralize(n: undefined): undefined;
function pluralize(s: string): string;
function pluralize(s: string | undefined): string | undefined {
  return s === undefined ? undefined : s + 's';
}
const cats: string = pluralize('cat');
const dogs: string = pluralize('dog');
// const anUndefined: string = pluralize('x');
const anUndefined: undefined = pluralize(undefined);
console.log([cats, dogs, anUndefined]);

// Our recommendation is: when using function overloads, tread very carefully. It's probably best to avoid them unless they solve a serious problem in your system.
