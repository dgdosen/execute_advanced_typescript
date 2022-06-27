// type Bag1<T> = {
//   value: T;
// };
// interface Bag2<T> {
//   value: T;
// }
// class Bag3<T> {
//   value: T;
//   constructor(value: T) {
//     this.value = value;
//   }
// }
// const bag1Number: Bag1<number> = { value: 1 };
// const bag1String: Bag1<string> = { value: 'a' };
// const bag2Number: Bag2<number> = { value: 1 };
// const bag2String: Bag2<string> = { value: 'a' };
// const bag3Number: Bag3<number> = { value: 1 };
// const bag3String: Bag3<string> = { value: 'a' };
// console.log([
//   bag1Number.value,
//   bag1String.value,
//   bag2Number.value,
//   bag2String.value,
//   bag3Number.value,
//   bag3String.value,
// ]);
// // Output: [1, "a", 1, "a", 1, "a"]

// function returnsItsArgument<T>(arg: T): T {
//   return arg;
// }
// console.log([returnsItsArgument(1), returnsItsArgument('hello')]);
// // Output: [1, "hello"]

// const returnsItsArgument = (arg) => arg;
// console.log([returnsItsArgument(1), returnsItsArgument('hello')]);
// // type error: Parameter 'arg' implicitly has an 'any' type.

// const returnsItsArgument = <T>(arg: T): T => {
//   return arg;
// };
// console.log([returnsItsArgument(1), returnsItsArgument('hello')]);
// // Output: [1, "hello"]

interface ArgumentReturner {
  <T>(arg: T): T;
  returnsArguments: true;
}
const returnsItsArgument: ArgumentReturner = <T>(arg: T): T => {
  return arg;
};
returnsItsArgument.returnsArguments = true;
console.log([returnsItsArgument(2), returnsItsArgument('it worked')]);
