//const [x, y, z] = [2, 3, 4];
//console.log(x * (y + z));
// //14

//const [x, y, z] = [2, 3, 4];
//console.log()(x * y) + (x * z));
// //14

// const [x, y, z] = [2, 3, 4];
// console.log(x + (y * z));
// // 14

// const [x, y, z] = [2, 3, 4];
// console.log((x + y) * (x + z));
// // 30

// type User = { kind: 'user'; name: string; isAdmin: boolean };
// type Cat = { kind: 'cat'; name: string; isAdmin: undefined };
// type IsAdmin = { isAdmin: true };
// type Admin = IsAdmin & (User | Cat);

// const admin: Admin = { kind: 'user', name: 'Amir', isAdmin: true };
// admin.isAdmin;
// // true

// const admin: Admin = { kind: 'user', name: 'Amir', isAdmin: false };
// console.log(admin.isAdmin);
// // type error: Type 'false' is not assignable to type 'true'.

//const admin: Admin = { kind: 'cat', name: 'Ms. Fluff', isAdmin: true };
//console.log(admin.isAdmin);
//// NOTE: not helfpul.  We'll see a better way
////type error: Type '"cat"' is not assignable to type '"user"'.

// type Cat = { kind: 'cat'; name: string; isAdmin: undefined };
// type CatAdmin = IsAdmin & Cat;
// type IsAdmin = { isAdmin: true };

// console.log(const catAdmin: CatAdmin = {});
// type error: Type '{}' is not assignable to type 'never'.
//   The intersection 'CatAdmin' was reduced to 'never' because property 'isAdmin' has conflicting types in some constituents.

//type User = { kind: 'user'; name: string; isAdmin: boolean };
//type Cat = { kind: 'cat'; name: string; isAdmin: undefined };
//type IsAdmin = { isAdmin: true };
//type Admin = IsAdmin & (User | Cat);
//const admin: Admin = { kind: 'cat', name: 'Ms. Fluff', isAdmin: true };
//console.log(admin.isAdmin);
// NOTE: again, not very helpful
////type error: Type '"cat"' is not assignable to type '"user"'.

// type Admin = {kind: 'user', name: string, isAdmin: true};
// const admin: Admin = {kind: 'cat', name: 'Ms. Fluff', isAdmin: true};
// console.log(admin.isAdmin);
// // type error: Type '"cat"' is not assignable to type '"user"'.
