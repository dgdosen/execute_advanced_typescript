// function findUser(id: number) {
//   return { id: 1, name: 'Amir' };
// }
// console.log(findUser(1));
// // { id: 1, name: 'Amir' }

// type Comment = {
//   subject: string;
// };
// type User = {
//   id: number;
//   name: string;
//   comments?: Comment[];
// };
// function findUser(id: number, options: { withComments?: boolean } = {}): User {
//   const user = { id: 1, name: 'Amir' };
//   if (options.withComments) {
//     return { ...user, comments: [{ subject: "Ms. Fluff's 4th birthday" }] };
//   } else {
//     return user;
//   }
// }
// console.log(findUser(1));
// // { id: 1, name: 'Amir' }

// type Comment = {
//   subject: string;
// };
// type User = {
//   id: number;
//   name: string;
//   comments?: Comment[];
// };
// function findUser(id: number, options: { withComments?: boolean } = {}): User {
//   const user = { id: 1, name: 'Amir' };
//   if (options.withComments) {
//     return { ...user, comments: [{ subject: "Ms. Fluff's 4th birthday" }] };
//   } else {
//     return user;
//   }
// }
// console.log(findUser(1, { withComments: true }));
// // { id: 1, name: 'Amir', comments: [{ subject: "Ms. Fluff's 4th birthday" }] }

type Comment = {
  subject: string;
};
interface User {
  id: number;
  name: string;
}
interface UserWithComments extends User {
  comments: Comment[];
}
function findUser(id: number): User;
function findUser(
  id: number,
  options: { withComments: true },
): UserWithComments;
function findUser(
  id: number,
  options: { withComments?: boolean } = {},
): User | UserWithComments {
  const user = { id: 1, name: 'Amir' };
  if (options.withComments) {
    return { ...user, comments: [{ subject: "Ms. Fluff's 4th birthday" }] };
  } else {
    return user;
  }
}
// const user = findUser(1);
// console.log(user.name);
// // Amir

//const user = findUser(1);
//console.log(user.comments[0].subject);
////type error: Property 'comments' does not exist on type 'User'.

// const user = findUser(1, { withComments: true });
// console.log(user.comments[0].subject);
// // Ms. Fluff's 4th birthday
