// type LoginCounts = { [userName: string]: number };
// const loginCounts: LoginCounts = {
//   Amir: 5,
//   Betty: 11,
// };
// console.log(loginCounts.Betty);
// // Output: 11

// type Nullable<T> = {
//   [K in keyof T]: T[K] | null
// };
// type LoginCounts = {[userName: string]: number};
// const loginCounts: Nullable<LoginCounts> = {
//   Amir: 5,
//   Betty: null,
// };
// console.log(loginCounts.Betty);
// // Output: null

// type LoginCounts = { [userName: string]: number };
// const loginCounts: LoginCounts = {
//   Amir: 5,
//   Betty: undefined,
// };
// console.log(loginCounts.Betty);
// // type error: Type 'undefined' is not assignable to type 'number'.

// type LoginCounts = { [userName: string]: number };
// const loginCounts: Partial<LoginCounts> = {
//   Amir: 5,
//   Betty: undefined,
// };
// console.log(loginCounts.Betty);
// // Output: undefined

type LoginCounts = {
  Amir: number;
  [userName: string]: number;
};
const loginCounts: Partial<LoginCounts> = {
  Amir: 5,
  Betty: undefined,
};
console.log(loginCounts.Betty);
// Output: undefined
