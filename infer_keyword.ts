// type ArrayContents<T extends Array<any>> = T[number];
// const n: ArrayContents<Array<number>> = 'one';
// console.log(n);

// type ArrayContents<T extends Array<any>> = T[number];
// const n: ArrayContents<Array<number>> = 1;
// console.log(n);
// // 1

// type ArrayContents<T> = T extends Array<infer ElementType>
//   ? ElementType
//   : never;
// const n: ArrayContents<Array<number>> = 1;
// console.log(n);
// // 1

// type ArrayContents<T> = T extends Array<infer ElementType>
//   ? ElementType
//   : never;
// const n: ArrayContents<Array<number>> = 'one';
// console.log(n);
// // type error: Type 'string' is not assignable to type 'number'.

// type ArrayContents<T> = T extends Array<infer ElementType>
//   ? ElementType
//   : never;
// const n: ArrayContents<{ name: string }> = 1;
// console.log(n);
// // type error: Type 'number' is not assignable to type 'never'

// type ArrayContents<T> = T extends Array<ElementType> ? ElementType : never;
// const n: ArrayContents<Array<number>> = 1;
// console.log(n);
// // type error: Cannot find name 'ElementType'

// type ArrayContents<T> = T extends Array<infer ElementType>
//   ? ElementType
//   : never;
// const n: ArrayContents<Array<string>> = 'one';
// console.log(n);
// // one

// type OurReturnType<Func> = Func extends (...args: any) => infer Return
//   ? Return
//   : never;
// function add(x: number, y: number): number {
//   return x + y;
// }
// const n: OurReturnType<typVeof add> = 123;
// console.log(n);
// // 123

// const n: OurReturnType<typeof add> = 'one two three';
// console.log(n);
// // type error: Type 'string' is not assignable to type 'number'.

// type ArrayContents<T> = T extends Array<infer ElementType>
type SetContents<T> = T extends Set<infer ElementType> ? ElementType : never;
const n: SetContents<Set<number>> = 123;
const s: SetContents<Set<string>> = 'a string';
console.log([n, s]);
