// console.log([1, 2, 3].map(x => x * 2));
// // Output: [2, 4, 6]

// type User = {
//   email: string
// };
// type UserAggregate = {
//   [K in keyof User]: Array<string>
// };
// const userAggregate: UserAggregate = {
//   email: ['amir@example.com'],
// };
// console.log(userAggregate.email);
// // [ 'amir@example.com' ]

// type User = {
//   email: string
//   age: number
// };
// type UserAggregate = {
//   [K in keyof User]: Array<string>
// };
// const userAggregate: UserAggregate = {
//   email: ['amir@example.com'],
//   age: ['36'],
// };
// console.log(userAggregate);
// // { email: [ 'amir@example.com' ], age: [ '36' ] }

//type User = {
//  email: string
//  age: number
//};
//type UserAggregate = {
////[K in keyof User]: Array<string>
//  [K in keyof User]: Array<User[K]>
//};
//const userAggregate: UserAggregate = {
//  email: ['amir@example.com'],
//  age: [36],
//};
//console.log(userAggregate);
//// { email: [ 'amir@example.com' ], age: [ 36 ] }

// type User = {
//   email: string
//   age: number
// };

// type UserAggregate = {
//   [K in keyof User]: Array<User[K]>
// };

// const userAggregate: UserAggregate = {
//   email: 'amir@example.com',
//   age: 36,
// };
// console.log(userAggregate);
// // type error: Type 'string' is not assignable to type 'string[]'.


