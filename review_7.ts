// type TakesLiteralString = (s: 'lastLoginDate') => string;
// function takesString(s: string): string {
//   return s;
// }
// const testFunction: TakesLiteralString = takesString;
// console.log(testFunction('lastLoginDate'));
// // lastLoginDate

// type TakesManyNumbers = (numbers: Array<number>) => number;
// function sumTwo(numbers: [number, number]): number {
//   return numbers[0] + numbers[1];
// }
// const sum: TakesManyNumbers = sumTwo;
// sum([1]);
// // type error: Type '(numbers: [number, number]) => number' is not assignable to type 'TakesManyNumbers'.

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
// [ 1, 'a', 1, 'a', 1, 'a' ]

const returnsItsArgument = <T>(arg: T): T => {
  return arg;
};
console.log([returnsItsArgument(1), returnsItsArgument('hello')]);
