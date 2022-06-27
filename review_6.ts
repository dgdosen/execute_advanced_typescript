// typeof
// function double(n: number): number {
//   return n * 2;
// }
// const quadruple: typeof double =
//   /* use `typeof` to reuse `double`'s type */
//   (n) => n * 4;
// console.log([quadruple(3), quadruple(7)]);
// // [12), 28]

// typeof
// const one: number = 1;
// type OurType = typeof one;
// const aString: OurType = 'hello';
// console.log(aString);
// // type error: Type 'string' is not assignable to type 'number'.

// generic_constraints
// function filterBelowAge<T extends { age: number }>(
//   things: Array<T>,
//   limit: number,
// ): Array<T> {
//   return things.filter((thing) => thing.age < limit);
// }
// type Album = { name: string; copiesSold: number };
// const allAlbums: Album[] = [
//   { name: 'The Dark Side of the Moon', copiesSold: 24400000 },
// ];
// console.log(filterBelowAge(allAlbums, 10).map((album) => album.name));
// // type error: Argument of type 'Album[]' is not assignable to parameter of type '{ age: number; }[]'.

// type_predicates
// type Album = { name: string; copiesSold: number };
// type Artist = { name: string; topSellingAlbum: Album | undefined };

// function isAlbum(maybeAlbum: Album | undefined): maybeAlbum is Album {
//   return maybeAlbum !== undefined;
// }
// const artist: Artist = {
//   name: 'Pink Floyd',
//   topSellingAlbum: {
//     name: 'The Dark Side of the Moon',
//     copiesSold: 24400000,
//   },
// };
// let album: Album;
// if (isAlbum(artist.topSellingAlbum)) {
//   album = artist.topSellingAlbum;
// } else {
//   album = { name: 'unknown', copiesSold: 0 };
// }
// console.log(album);
// // { name: 'The Dark Side of the Moon', copiesSold: 24400000 }

// type algebra
// type User = { kind: 'user'; name: string; isAdmin: boolean };
// type Cat = { kind: 'cat'; name: string; isAdmin: undefined };
// type IsAdmin = { isAdmin: true };

// type Admin = IsAdmin & (User | Cat);

// const admin: Admin = { kind: 'user', name: 'Amir', isAdmin: true };
// console.log(admin.isAdmin);
// // true

// // generic_constraints_and_typ_compatibility
// type SpecificKey<T extends string> = { key: T };
// const ageKey: SpecificKey<'name'> = { key: 'age' };
// console.log(ageKey.key);
// // type error: Type '"age"' is not assignable to type '"name"'.

// // keyof
// type User = {
//   name: string;
//   age: number;
// };
// const key: keyof User = 'age';
// console.log(key);
// // age

// keyof
// type User = {
//   name: string;
//   age: number;
// };
// const key: keyof User = 'isAdmin';
// console.log(key);
// // type error: Type '"isAdmin"' is not assignable to type 'keyof User'.

// type NestedNumberArray = number | NestedNumberArray[];
// const n: NestedNumberArray = [[[[1]], 2, [3]]];
// console.log('ok');
// // ok

// geneic constraints
// type Animal = {
//   species: string;
// };
// type Appointment<A extends Animal> = {
//   animal: A;
// };
// function getAppointmentSpecies<A extends Animal>(appointment: Appointment<A>) {
//   return appointment.animal.species;
// }
// const appointment = {
//   animal: {
//     species: 'felis catus',
//     name: 'Ms. Fluff',
//   },
// };
// const species = getAppointmentSpecies(appointment);
// console.log(species);
// // felis catus

// type_predicates
// type Address = { postalCode: string; country: string };
// function isAddress(address: Address | undefined): address is Address {
//   return address !== undefined;
// }
// console.log(isAddress({ postalCode: '75010', country: 'France' }));
// // true

// generic_constraints_and_typ_compatibility
// type SpecificKey<T extends string> = { key: T };
// const nameOrAge: SpecificKey<'name' | 'age'> = { key: 'age' };
// const emailOrAge: SpecificKey<'email' | 'age'> = nameOrAge;
// console.log(emailOrAge);
// // type error: Type 'SpecificKey<"name" | "age">' is not assignable to type 'SpecificKey<"age" | "email">'.

// type NestedNumberArray = number | NestedNumberArray[];
// const n: NestedNumberArray = { 1: 2 };
// console.log('ok');
// // te

// // type_algerbra
// type User = { kind: 'user'; name: string; isAdmin: boolean };
// type Cat = { kind: 'cat'; name: string; isAdmin: undefined };
// type IsAdmin = { isAdmin: true };
// type Admin = IsAdmin & (User | Cat);
// const admin: Admin = { kind: 'cat', name: 'Ms. Fluff', isAdmin: true };
// console.log(admin.isAdmin);
// // type error: Type '"cat"' is not assignable to type '"user"'.

// // keyof
// function getProperty<T>(obj: T, propertyName: keyof T) {
//   return obj[propertyName];
// }
// const name: string = getProperty({ name: 'Amir' }, 'name');
// const age: number = getProperty({ age: 36 }, 'age');
// console.log([name, age]);
// // ['Amir', 36]


