// function get<T>(obj: T, key: keyof T) {
//   return obj[key];
// }
// const name = get({ name: 'Amir', age: 36 }, 'name');
// console.log(name);
// // 'Amir'

// function get<T>(obj: T, key: keyof T) {
//   return obj[key];
// }
// const email = get({ name: 'Amir', age: 36 }, 'email');
// console.log(email);
// // type error: Argument of type '"email"' is not assignable to parameter of type '"name" | "age"'.

// function get<T>(obj: T, key: keyof T) {
//   return obj[key];
// }
// const result: string = get({ name: 'Amir', age: 36 }, 'name');
// console.log(result);
// // type error: Type 'string | number' is not assignable to type 'string'.
// //   Type 'number' is not assignable to type 'string'.

// function get<T, Key extends keyof T>(obj: T, key: Key): T[Key] {
//   return obj[key];
// }
// const name: string = get({ name: 'Amir', age: 36 }, 'name');
// console.log(name);
// // 'Amir'
// const age: number = get({ name: 'Amir', age: 36 }, 'age');
// console.log(age);
// // 36
// const isAdmin = get({name: 'Amir', age: 36}, 'isAdmin');
// console.log(isAdmin);
// // type error: Argument of type '"isAdmin"' is not assignable to parameter of type '"name" | "age"'.

// function get<T, Key extends keyof T>(obj: T, key: Key): T[Key] {
//   return obj[key];
// }
// const port: number = get({ hostname: '127.0.0.1', port: 3000 }, 'port');
// console.log(port);
// // 3000

function get<T, Key extends keyof T>(obj: T, key: Key): T[Key] {
  return obj[key];
}
const name: string = get({ name: 'Amir' }, 'name');
name;
const amir: { name: string; age: number } = { name: 'Amir', age: 36 };
console.log([get(amir, 'name'), get(amir, 'age')]);
