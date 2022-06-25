// type User = {
//   name: string;
//   age: number;
// };

// type NameOrAge = User['name' | 'age'];
// const nameOrAge: NameOrAge = 'Amir';
// console.log(nameOrAge);
// // Amir

// const nameOrAge: NameOrAge = 36;
// console.log(nameOrAge);
// // 36

// const nameOrAge: NameOrAge = undefined;
// console.log(nameOrAge);
// // type error: Type 'undefined' is not assignable to type 'NameOrAge'.

// type User = {
//   name: string;
//   age: number;
// };
// type NameOrAgeKeys = 'name' | 'age';
// type NameOrAge = User[NameOrAgeKeys];
// const nameOrAge: NameOrAge = undefined;
// console.log(nameOrAge);
// // type error: Type 'undefined' is not assignable to type 'NameOrAge'.

// const user = {
//   name: 'Amir',
//   age: 36,
// };
// type NameOrAge = typeof user['name' | 'age'];
// const nameOrAge: NameOrAge = 'Betty';
// console.log(nameOrAge);
// // Betty

// const album = {
//   name: 'A Love Supreme',
//   copiesSold: 500000,
// };
// type NameOrCopiesSold = typeof album['name' | 'copiesSold'];
// const name: NameOrCopiesSold = album.name;
// const copiesSold: NameOrCopiesSold = album.copiesSold;
// console.log([name, copiesSold]);
// // [ 'A Love Supreme', 500000 ]

// console.log([3 * (4 + 2), 3 * 4 + 3 * 2]);
// // [ 18, 18 ]

type User = { name: string; age: number };
type PropertyTypes1 = User['name' | 'age'];
type PropertyTypes2 = User['name'] | User['age'];
