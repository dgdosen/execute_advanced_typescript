// // typeof
// const one: number = 1;
// type OurType = typeof one;
// const aString: OurType = 'hello';
// console.log(aString);
// // type error: Type 'string' is not assignable to type 'number'

// // keyof
// type User = {
//   name: string
//   age: number
// };
// const key: keyof User = 'age';
// console.log(key);
// // 'age'

// // generic_constraints
// function filterBelowAge<T extends {age: number}>(
//   things: Array<T>,
//   limit: number
// ): Array<T> {
//   return things.filter(thing => thing.age < limit);
// }
// type Album = {name: string, copiesSold: number};

// const allAlbums: Album[] = [
//   {name: 'The Dark Side of the Moon', copiesSold: 24400000},
// ];
// filterBelowAge(allAlbums, 10).map(album => album.name);
// // type error: Argument of type 'Album[]' is not assignable to parameter of type '{ age: number; }[]'.

// // type_predicates
// type Album = {name: string, copiesSold: number};
// type Artist = {name: string, topSellingAlbum: Album | undefined};
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
//   album = {name: 'unknown', copiesSold: 0};
// }
// console.log(album);
// // { name: 'The Dark Side of the Moon', copiesSold: 24400000 }

// // keyof
// function getProperty<T>(obj: T, propertyName: keyof T) {
//   return obj[propertyName];
// }
// const name: string = getProperty({name: 'Amir'}, 'name');
// const age: number = getProperty({age: 36}, 'age');
// console.log([name, age]);
// // ['Amir', 36]

// type Animal = {
//   species: string
// };
// type Appointment<A extends Animal> = {
//   animal: A
// };
// function getAppointmentSpecies<A extends Animal>(
//   appointment: Appointment<A>
// ) {
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
// // 'felis catus'

// // type_predicates
// type Address = {postalCode: string, country: string};
// function isAddress(address: Address | undefined): address is Address {
//   return address !== undefined;
// }
// console.log(isAddress(undefined));
// // false

// typeof
// function double(n: number): number {
//   return n * 2;
// }
// const quadruple: typeof double = (n) => n * 4;
// console.log([quadruple(3), quadruple(7)]);
// // [12, 28]

// // keyof
// type User = {
//   name: string
//   age: number
// };
// const key: keyof User = 'isAdmin';
// console.log(key);
// // type error: Type '"isAdmin"' is not assignable to type 'keyof User'.

// // recursive_types
// type NestedNumberArray = number | NestedNumberArray[];
// const n: NestedNumberArray = [[[[1]], 2, [3]]];
// console.log('ok');
// // ok

// recursive_types
//type NestedNumberArray = number | NestedNumberArray[];
//const n: NestedNumberArray = {1: 2};
//'ok';
// type error: Type '{ 1: number; }' is not assignable to type 'NestedNumberArray' Type '{ 1: number; }' is not assignable to type 'number'.
