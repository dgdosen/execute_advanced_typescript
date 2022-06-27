// function returnsLiteralString(): 'lastLoginDate' {
//   return 'lastLoginDate';
// }
// type ReturnsString = () => string;
// const testFunction: ReturnsString = returnsLiteralString;
// console.log(testFunction());
// // lastLoginDate

// function returnsString(): string {
//   return 'lastLoginDate';
// }
// type ReturnsLiteralString = () => 'lastLoginDate';
// const testFunction: ReturnsLiteralString = returnsString;
// console.log(testFunction());
// // type error: Type '() => string' is not assignable to type 'ReturnsLiteralString'.
// //   Type 'string' is not assignable to type '"lastLoginDate"'.

// function returnsTuple(): [boolean, boolean, boolean] {
//   return [true, false, true];
// }
// type ReturnsArray = () => Array<boolean>;
// const testFunction: ReturnsArray = returnsTuple;
// console.log(testFunction());
// // [ true, false, true ]

// function returnsArray(): Array<boolean> {
//   return [true, false, true];
// }
// type ReturnsTuple = () => [boolean, boolean, boolean];
// const testFunction: ReturnsTuple = returnsArray;
// console.log(testFunction());
// // type error: Type '() => boolean[]' is not assignable to type 'ReturnsTuple'.
// //   Type 'boolean[]' is not assignable to type '[boolean, boolean, boolean]'.
// //     Target requires 3 element(s) but source may have fewer.


