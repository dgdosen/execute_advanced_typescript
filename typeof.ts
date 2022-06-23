// const one: number = 1;
// const two: typeof one = 2;
// console.log(two);
// // Output: 2

// const one: number = 1;
// type OurType = typeof one;
// const two: OurType = 2;
// console.log(two);
// // Output: 2

// const one: number = 1;
// type OurType = typeof one;
// const aString: OurType = 'hello';
// console.log(aString);
// // type error: Type 'string' is not assignable to type 'number'.

// const numbers = [1, 2];
// type OurVariableType = typeof numbers;
// const moreNumbers: OurVariableType = [3, 4, 5];
// console.log(moreNumbers);
// // Output: [3, 4, 5]

// function double(n: number) {
//   return n * 2;
// }
// // This gives us the type `(n: number) => number`.
// type OurFunctionType = typeof double;
// const quadruple: OurFunctionType = n => n * 4;
// console.log(quadruple(5));
// // Output: 20

//function double(n: number) {
//  return n * 2;
//}
//type OurFunctionType = typeof double;
//const add: OurFunctionType = (x: number, y: number) => x + y;
//console.log(add(1, 2));
////vtype error: Type '(x: number, y: number) => number' is not assignable to type '(n: number) => number'

// function double(n: number) {
//   return n * 2;
// }
// type OurReturnType = ReturnType<typeof double>;
// const n: OurReturnType = 55;
// console.log(n);
// // Output: 55

// function double(n: number) {
//   return n * 2;
// }
// type OurReturnType = ReturnType<typeof double>;
// const add = (x: number, y: number): OurReturnType => x + y;
// console.log(add(2, 3));
// // Output: 5


// function double(n: number) {
//   return n * 2;
// }
// type OurReturnType = ReturnType<typeof double>;
// const add = (x: number, y: number): OurReturnType => (x + y).toString();
// add(2, 3);
// type error: Type 'string' is not assignable to type 'number'.

// const one = 1;
// const two: typeof one = 2;
// console.log(two);
// // type error: Type '2' is not assignable to type '1'.

// const one: number = 1;
// const two: typeof one = 2;
// console.log(two);
// // Output: 2

// function double(n: number): number {
//   return n * 2;
// }
// const quadruple: typeof double = (n) => n * 4;
// console.log([quadruple(3), quadruple(7)]);
// // Output: [12, 28]

// const string = 'Amir';
// const amir = {name: string};
// console.log(amir);
// // Output: {name: 'Amir'}

// type User = {name: string};
// const amir: User = {name: 'Amir'};
// console.log(amir);
// // Output: {name: 'Amir'}


function doubleIfNumber(n: number | string): number | string {
  if (typeof n === 'number') {
    return n * 2;
  } else {
    return n;
  }
}
console.log([
  doubleIfNumber(5),
  doubleIfNumber('a'),
]);
// Output: [10, 'a']
