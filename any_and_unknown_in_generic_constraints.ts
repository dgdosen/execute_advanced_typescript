// type ItemsObject<A extends Array> = {
//   items: A;
// };
// const itemsObject: ItemsObject<Array<number>> = { items: [1, 2, 3] };
// console.log(itemsObject);
// // type error: Generic type 'Array<T>' requires 1 type argument(s)

// type ItemsObject<A extends Array<any>> = {
//   items: A;
// };
// const itemsObject: ItemsObject<Array<number>> = {
//   items: [1, 2, 3],
// };
// console.log(itemsObject);
// // { items: [ 1, 2, 3 ] }

// const one: any = 'one';
// const n: number = one;
// console.log(n);
// // 'one'

// const one = 'one';
// const n: number = one;
// console.log(n);
// // type error: Type 'string' is not assignable to type 'number'.

// type ItemsObject<A extends Array<any>> = {
//   items: A;
// };
// const itemsObject: ItemsObject<Array<string>> = {
//   items: ['a', 'b', 'c'],
// };
// console.log(itemsObject);
// // { items: [ 'a', 'b', 'c' ] }

// type ItemsObject<A extends Array<any>> = {
//   items: A;
// };
// const itemsObject: ItemsObject<Array<string>> = {
//   items: [1, 2, 3],
// };
// console.log(itemsObject);
// // type error: Type 'number' is not assignable to type 'string'.

// type ItemsObject<A extends Array<unknown>> = {
//   items: A;
// };
// const itemsObject: ItemsObject<Array<string>> = {
//   items: [1, 2, 3],
// };
// console.log(itemsObject);
// // type error: Type 'number' is not assignable to type 'string'.

// type Container<T> = {
//   item: T;
// };
// const container: Container<number> = { item: 1 };
// console.log(container);
// // { item: 1 }

// type Container<T> = {
//   item: T;
// };
// const container: Container<number> = { item: 'one' };
// console.log(container);
// // type error: Type 'string' is not assignable to type 'number'.

// type Container<T extends any> = {
//   item: T;
// };
// const container: Container<number> = { item: 1 };
// console.log(container);
// // { item: 1 }

// type Container<T extends any> = {
//   item: T;
// };
// const container: Container<number> = { item: 'one' };
// console.log(container);
// // type error: Type 'string' is not assignable to type 'number'.

// type Container<T> = {
//   item: T;
// };
// const container: Container<string> = { item: 'one' };
// const aNumber: number = container.item;
// console.log(aNumber);
// // type error: Type 'string' is not assignable to type 'number'.

// type Container<T> = {
//   item: T
// };
// const container: Container<any> = {item: 'one'};
// // This is a bug: the `any` lets us put a string into a `number`!
// const aNumber: number = container.item;
// console.log(aNumber);
// // 'one'

// function wrapSet<SetType extends Set<unknown>>(
//   theSet: SetType,
// ): { theSet: SetType } {
//   return { theSet };
// }
// const set1 = wrapSet(new Set<number>([1]));
// const set2 = wrapSet(new Set<string>(['a']));
// // We convert the sets into arrays so we can actually see what's inside them.
// console.log([[...set1.theSet], [...set2.theSet]]);
// // [ [ 1 ], [ 'a' ] ]
