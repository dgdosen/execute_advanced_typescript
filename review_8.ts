// // infer keyword
// type ArrayContents<T> = T extends Array<infer ElementType>
//   ? ElementType
//   : never;
// const n: ArrayContents<Array<number>> = 'one';
// console.log(n);
// // type error: Type 'string' is not assignable to type 'number'.

// // mapped_types
// type User = {
//   email: string;
//   age: number;
// };
// type UserAggregate = {
//   [K in keyof User]: Array<User[K]>;
// };
// const userAggregate: UserAggregate = {
//   email: 'amir@example.com',
//   age: 36,
// };
// console.log(userAggregate);
// // type error: Type 'string' is not assignable to type 'string[]'.

// // function_return_type_compatibility
// function returnsArray(): Array<boolean> {
//   return [true, false, true];
// }

// type ReturnsTuple = () => [boolean, boolean, boolean];

// const testFunction: ReturnsTuple = returnsArray;
// console.log(testFunction());
// // type error: Type '() => boolean[]' is not assignable to type 'ReturnsTuple'.
// //   Type 'boolean[]' is not assignable to type '[boolean, boolean, boolean]'.

// // distributive_conditional_types
// type RemoveStringsFromUnion<T> = T extends string ? never : T;
// const n1: RemoveStringsFromUnion<string | number> = 11;
// const n2: number = n1;
// const b1: RemoveStringsFromUnion<string | boolean> = true;
// const b2: boolean = b1;
// console.log([n2, b2]);
// // [ 11, true ]

// // mappped_types_with_index_signatures
// type Nullable<T> = {
//   [K in keyof T]: T[K] | null;
// };
// type LoginCounts = { [userName: string]: number };
// const loginCounts: Nullable<LoginCounts> = {
//   Amir: 5,
//   Betty: null,
// };
// console.log(loginCounts.Betty);
// // null

// // mapped_types_with_index_signatures
// type LoginCounts = { [userName: string]: number };
// const loginCounts: Partial<LoginCounts> = {
//   Amir: 5,
//   Betty: undefined,
// };
// console.log(loginCounts.Betty);
// // undefined

// // assertion_functions
// function assertNumber(n: unknown): asserts n is number {
//   if (typeof n !== 'number') {
//     throw new Error("Value wasn't a number: " + n);
//   }
// }
// const n: number | undefined = ((): number | undefined => undefined)();
// assertNumber(n);
// const n2: number = n;
// console.log(n2);
// // Error: Value wasn't a number: undefined

// // function_return_type_compatibility
// function returnsTuple(): [boolean, boolean, boolean] {
//   return [true, false, true];
// }
// type ReturnsArray = () => Array<boolean>;
// const testFunction: ReturnsArray = returnsTuple;
// console.log(testFunction());
// // [ true, false, true ]

// // infer_keyword
// type SetContents<T> = T extends Set<infer U> ? U : never;
// const n: SetContents<Set<number>> = 123;
// const s: SetContents<Set<string>> = 'a string';
// console.log([n, s]);
// // [ 123, 'a string' ]

// // overloading_with_option_objects
// type Comment = {
//   subject: string;
// };
// interface User {
//   id: number;
//   name: string;
// }
// interface UserWithComments extends User {
//   comments: Comment[];
// }
// function findUser(id: number): User;
// function findUser(
//   id: number,
//   options: { withComments: true },
// ): UserWithComments;
// function findUser(
//   id: number,
//   options: { withComments?: boolean } = {},
// ): User | UserWithComments {
//   const user = { id: 1, name: 'Amir' };
//   if (options.withComments) {
//     return { ...user, comments: [{ subject: "Ms. Fluff's 4th birthday" }] };
//   } else {
//     return user;
//   }
// }
// const user = findUser(1, { withComments: true });
// console.log(user.comments[0].subject);
// // Ms. Fluff's 4th birthday

// // distributive_conditional_types
// type StringToNull<T> = T extends string ? null : T;
// function returnsNullOrNumber(): null | number {
//   return null;
// }
// const n: StringToNull<string | number> = returnsNullOrNumber();
// console.log(n);
// // null

// // type_predicates_in_filter
// function isNumber(maybeNumber: number | string) {
//   return typeof maybeNumber === 'number';
// }
// const numbersAndStrings: (number | string)[] = [1, 'a', 2, 'b'];
// const numbers: number[] = numbersAndStrings.filter(isNumber);
// console.log(numbers);
// // type error: Type '(string | number)[]' is not assignable to type 'number[]'.
// //   Type 'string | number' is not assignable to type 'number'.
// //     Type 'string' is not assignable to type 'number'.

// // default_type_parameters
// type OurArray<T = string> = Array<T>;
// const numbers: OurArray = [10, 20];
// console.log(numbers);
// // type error: Type 'number' is not assignable to type 'string'.

// // overloading_with_options_objects
// type Comment = {
//   subject: string;
// };
// interface User {
//   id: number;
//   name: string;
// }
// interface UserWithComments extends User {
//   comments: Comment[];
// }
// function findUser(id: number): User;
// function findUser(
//   id: number,
//   options: { withComments: true },
// ): UserWithComments;
// function findUser(
//   id: number,
//   options: { withComments?: boolean } = {},
// ): User | UserWithComments {
//   const user = { id: 1, name: 'Amir' };
//   if (options.withComments) {
//     return { ...user, comments: [{ subject: "Ms. Fluff's 4th birthday" }] };
//   } else {
//     return user;
//   }
// }
// const user = findUser(1);
// user.comments[0].subject;
// // type error: Property 'comments' does not exist on type 'User'.

// // keyof_generic_constraints
// function get<T, Key extends keyof T>(obj: T, key: Key): T[Key] {
//   return obj[key];
// }
// const name: string = get({ name: 'Amir' }, 'name');
// name;
// const amir: { name: string; age: number } = { name: 'Amir', age: 36 };
// console.log([get(amir, 'name'), get(amir, 'age')]);
// // [ 'Amir', 36 ]

// // type_predicates_in_filter
// function isBoolean(maybeBool: boolean | null): maybeBool is boolean {
//   return maybeBool !== null;
// }
// const boolsAndNulls: (boolean | null)[] = [true, null, false];
// const bools: boolean[] = boolsAndNulls.filter(isBoolean);
// console.log(bools);
// // [ true, false]

// // keyof_generic_constraints
// function get<T, Key extends keyof T>(obj: T, key: Key): T[Key] {
//   return obj[key];
// }
// const name: string = get({ name: 'Amir', age: 36 }, 'name');
// console.log(name);
// // Amir

// // default_type_parameters
// type OurArray<T = string> = Array<T>;
// const names: OurArray = ['Amir', 'Betty'];
// console.log(names);
// // [ 'Amir', 'Betty' ]

// // mapped_types
// type User = {
//   email: string;
// };
// type UserAggregate = {
//   [K in keyof User]: Array<string>;
// };
// const userAggregate: UserAggregate = {
//   email: ['amir@example.com'],
// };
// console.log(userAggregate.email);
// // [ 'amir@example.com' ]

// // assertion_functions
// function assertString(s: unknown): asserts s is string {
//   if (typeof s !== 'string') {
//     throw new Error('not a string');
//   }
// }
// const s: string | number = ((): string | number => 'a string')();
// assertString(s);
// const s2: string = s;
// console.log(s2);
// // a string

function assertNumber(n: unknown): asserts n is number {
  if (typeof n !== 'number') {
    throw new Error("Value wasn't a number: " + n);
  }
}
const n: number | undefined = ((): number | undefined => 5)();
assertNumber(n);
const n2: number = n;
console.log(n2);
