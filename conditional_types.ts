// const x = 5;
// console.log(x > 0 ? x + 1 : x);
// 6

// const x = -2;
// console.log(x > 0 ? x + 1 : x);
// // -2

// type WrapStringInArray<T> = T extends string ? Array<string> : T;
// const s: WrapStringInArray<string> = ['hello'];
// console.log(s);
// // ['hello']

// type WrapStringInArray<T> = T extends string ? Array<string> : T;
// const s: WrapStringInArray<string> = 'hello';
// console.log(s);
// // type error: Type 'string' is not assignable to type 'string[]'.

// type WrapStringInArray<T> = T extends string ? Array<string> : T;
// const n: WrapStringInArray<number> = 1;
// console.log(n);
// // 1

// type WrapStringsInArrays<T> = {
//   [K in keyof T]: T[K] extends string ? Array<string> : T[K];
// };
// type User = {
//   name: string;
//   email: string;
//   age: number;
// };
// const amir: WrapStringsInArrays<User> = {
//   name: ['Amir'],
//   email: ['amir@example.com'],
//   age: 36,
// };
// console.log(amir.name);
// // ['Amir']

// const amir: WrapStringsInArrays<User> = {
//   name: 'Amir',
//   email: ['amir@example.com'],
//   age: 36,
// };
// console.log(amir.name);
// // type error: Type 'string' is not assignable to type 'string[]'.

// const amir: WrapStringsInArrays<User> = {
//   name: ['Amir'],
//   email: ['amir@example.com'],
//   age: [36],
// };
// console.log(amir.name);
// // type error: Type 'number[]' is not assignable to type 'number'.

// type ReplaceNumberPropertiesWithNull<T> = {
//   /* Mapped type with conditional type goes here. */
//   [K in keyof T]: T[K] extends number ? null : T[K];
// };
// type User = {
//   name: string;
//   age: number;
// };
// /* We make two different Amir variables to make sure that the type has
//  * exactly the property types we expect. */
// const amir1: ReplaceNumberPropertiesWithNull<User> = {
//   name: 'Amir',
//   age: null,
// };
// const amir2: { name: string; age: null } = amir1;
// console.log(amir2);
// // { name: 'Amir', age: null }

// Regular application code rarely needs conditional types.
