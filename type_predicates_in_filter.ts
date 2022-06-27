// const filtered: number[] = [1, 2, 3, 4].filter((x) => x < 3);
// console.log(filtered);

// function isNumber(maybeNumber: number | string) {
//   return typeof maybeNumber === 'number';
// }
// console.log([1, 'a', 2, 'b'].filter(isNumber));
// // [ 1, 2 ]

// function isNumber(maybeNumber: number | string) {
//   return typeof maybeNumber === 'number';
// }
// const numbersAndStrings: (number | string)[] = [1, 'a', 2, 'b'];
// const numbers: number[] = numbersAndStrings.filter(isNumber);
// console.log(numbers);
// // type error: Type '(string | number)[]' is not assignable to type 'number[]'.
// //   Type 'string | number' is not assignable to type 'number'.
// //     Type 'string' is not assignable to type 'number'.

// function isNumber(maybeNumber: number | string): maybeNumber is number {
//   return typeof maybeNumber === 'number';
// }
// const numbersAndStrings: (number | string)[] = [1, 'a', 2, 'b'];
// /* This assignment works because `filter` respects our `isNumber` type
//  * predicate. This `filter` call narrows the array from (number |
//  * string)[] to just number[]. */
// const numbers: number[] = numbersAndStrings.filter(isNumber);
// console.log(numbers);
// // [ 1, 2 ]

// function isBoolean(maybeBool: boolean | null): maybeBool is boolean {
//   return maybeBool !== null;
// }
// const boolsAndNulls: (boolean | null)[] = [true, null, false];
// const bools: boolean[] = boolsAndNulls.filter(isBoolean);
// console.log(bools);
// // [ true, false ]

// function isString(maybeString: string | undefined): maybeString is string {
//   return typeof maybeString === 'string';
// }
// const numbersAndUndefineds: (number | undefined)[] = [1, undefined, 2];
// const strings: string[] = numbersAndUndefineds.filter(isString);
// console.log(strings);
// // type error: Type '(number | undefined)[]' is not assignable to type 'string[]'.
// //   Type 'number | undefined' is not assignable to type 'string'.
// //     Type 'undefined' is not assignable to type 'string'.


