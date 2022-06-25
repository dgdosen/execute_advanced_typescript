// type OurPartial<T> = {
//   [P in keyof T]?: T[P];
// };
// type User = {
//   email: string;
//   age: number;
// };

// const user: OurPartial<User> = {
//   email: 'amir@example.com',
// };
// console.log(user);
// // { email: 'amir@example.com' }

// const user: OurPartial<User> = {
//   age: 36,
// };
// console.log(user);
// // {age: 36}

type Nullable<T> = {
  // NOTE: wrote this from scratch
  /* Mapped type goes here. */
  [P in keyof T]: T[P] | null;
};
type Company = {
  name: string;
  yearFounded: number;
};
const company1: Nullable<Company> = { name: 'Shure', yearFounded: null };
const company2: Nullable<Company> = { name: null, yearFounded: 1925 };
/* We pull the properties back out to make sure your types are correct. */
const name: string | null = company1.name;
const yearFounded: number | null = company1.yearFounded;
console.log([name, yearFounded]);
// [ 'Shure', null ]
