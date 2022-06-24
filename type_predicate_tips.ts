// function isNumber(maybeNumber: number | undefined): maybeNumber is number {
//   return typeof maybeNumber === 'number';
// }
// function numberOrUndefined(): number | undefined {
//   return 1;
// }
// const n: number | undefined = numberOrUndefined();
// let n2: number;
// if (isNumber(n)) {
//   n2 = n;
// } else {
//   n2 = 0;
// }
// console.log(n2);
// // 1

// /* This function has a bug! TypeScript can't tell us when our type
//  * predicate's body is wrong. */
// function isNumber(n: number | string): n is number {
//   return typeof n === 'string';
// }
// const n: string = 'oh no';
// const n2: number = isNumber(n) ? n : 0;
// console.log(n2);
// // 'oh no'

// function isString(s: string | undefined): s is string {
//   return typeof s === 'string';
// }
// const s1: undefined = undefined;
// const s2: string = isString(s1) ? s1 : 'not a string';
// console.log(s2);
// // not a string

function isString(s: unknown): s is string {
  return typeof s === 'string';
}
// const s: unknown = 'a string';
// const s2: string = isString(s) ? s : 'not a string';
// console.log(s2);
// // a string
// const s: unknown = { name: 'Betty' };
// const s2: string = isString(s) ? s : 'not a string';
// console.log(s2);
// // // not a string

// To recap, keep these two points in mind to prevent bugs when using type predicates:

// TypeScript trusts us to implement type predicates correctly. Test your predicate functions well to make sure that they do what you think they do.
// Type predicates can take unions as their arguments, or they can take unknown. In most cases, unknown is the safest and most flexible option.
