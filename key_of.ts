type User = {
  name: string
  age: number
};
function getUserProperty(user: User, key: 'name' | 'age') {
  return user[key];
}
// console.log(getUserProperty({name: 'Amir', age: 36}, 'name'));
// 'Amir'

// console.log(getUserProperty({name: 'Amir', age: 36}, 'isAdmin'));
// // type error: Argument of type '"isAdmin"' is not assignable to parameter of type '"name" | "age"'.

// const key: keyof User = 'name';
// console.log(key);
// // 'name'

// const key: keyof User = 'isAdmin';
// console.log(key);
// type error: Type '"isAdmin"' is not assignable to type 'keyof User'.

function getProperty<T>(obj: T, propertyName: keyof T) {
  return obj[propertyName];
}
const name: string = getProperty({name: 'Amir'}, 'name');
const age: number = getProperty({age: 36}, 'age');
console.log([name, age]);
