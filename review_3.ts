// // conditional_types
// type WrapStringInArray<T> = T extends string ? Array<string> : T;
// const s: WrapStringInArray<string> = ['hello'];
// console.log(s);
// // ['hello']

// // conditional_types
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

// // type_predicate_tips
// function isString(s: string | undefined): s is string {
//   return typeof s === 'string';
// }
// const s1: undefined = undefined;
// const s2: string = isString(s1) ? s1 : 'not a string';
// console.log(s2);
// // not a string

// // indexing_types_with_unions
// const album = {
//   name: 'A Love Supreme',
//   copiesSold: 500000,
// };
// type NameOrCopiesSold = typeof album[
//   | 'name'
//   | 'copiesSold'] /* index by union type here */;
// // type NameOrCopiesSold = (typeof album[
// //   | 'name'
// //   | 'copiesSold']) /* index by union type here */;
// const name: NameOrCopiesSold.name = album.name;
// const copiesSold: NameOrCopiesSold.copiesSold = album.copiesSold;
// console.log([name, copiesSold]);
// // this should have worked.  parens getting removed...
// // ['A Love Supreme', 500000]

/* This function has a bug! TypeScript can't tell us when our type
 * predicate's body is wrong. */
// function isString(n: string | number): n is string {
//   return typeof n === 'number';
// }
// const s: number = 404;
// const s2: string = isString(s) ? s : 'nothing';
// console.log(s2);
// // typescript is confused...
// // 404

// // indexing_types_with_union_types
// type User = {
//   name: string;
//   age: number;
// };
// type NameOrAge = User['name' | 'age'];
// const nameOrAge: NameOrAge = 36;
// console.log(nameOrAge);
// // 36
