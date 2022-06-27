// const s1: 'lastLoginDate' = 'lastLoginDate';
// const s2: string = s1;
// console.log(s2);
// // Output: lastLoginDate

// const a1: [number, number] = [1, 2];
// const a2: Array<number> = a1;
// console.log(a2);
// // Output: [1, 2]

// function takesLiteralString(s: 'lastLoginDate'): string {
//   return s;
// }
// type TakesString = (s: string) => string;
// const testFunction: TakesString = takesLiteralString;
// console.log(testFunction('lastLoginDate'));
// // type error: Type '(s: "lastLoginDate") => string' is not assignable to type 'TakesString'.

// function takesLiteralString(s: 'lastLoginDate'): string {
//   return s;
// }
// type TakesString = (s: string) => string;
// const testFunction: TakesString = takesLiteralString;
// console.log(testFunction("this string doesn't match the literal string type"));
// // type error: Type '(s: "lastLoginDate") => string' is not assignable to type 'TakesString'.

// type TakesLiteralString = (s: 'lastLoginDate') => string;
// function takesString(s: string): string {
//   return s;
// }
// const testFunction: TakesLiteralString = takesString;
// console.log(testFunction('lastLoginDate'));
// // Output: lastLoginDate

// type TakesManyNumbers = (numbers: Array<number>) => number;
// function sumTwo(numbers: [number, number]): number {
//   return numbers[0] + numbers[1];
// }
// const sum: TakesManyNumbers = sumTwo;
// console.log(sum([1]));
// // type error: Type '(numbers: [number, number]) => number' is not assignable to type 'TakesManyNumbers'.

// type TakesManyNumbers = (numbers: Array<number>) => number;
// function sumTwo(numbers: [number, number]): number {
//   return numbers[0] + numbers[1];
// }
// const sum: TakesManyNumbers = sumTwo as any;
// console.log(sum([1]));
// // Output: NaN

// You're likely to forget the term "contravariance". In fact, you may forget the details of the rule itself! It just doesn't fit well in our minds for some reason, which makes this topic infamous. The most important thing to remember is "the type rules for function arguments are weird". Or, if you can manage it, "the type rules for function arguments are reversed". You can always carefully think through a type error step by step, as long as you remember that the rules here are different.
