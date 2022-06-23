// type User = {name: string, age: number | undefined};
// const amir: User = {name: 'Amir', age: 36};
// const age: number = amir.age;
// console.log(age);
// // type error: Type 'number | undefined' is not assignable to type 'number'. Type 'undefined' is not assignable to type 'number'.

// type User = {name: string, age: number | undefined};
// const amir: User = {name: 'Amir', age: 36};
// let age: number;
// if (typeof amir.age === 'number') {
//   age = amir.age;
// } else {
//   age = 0;
// }
// console.log(age);
// // Output: 36

// type Address = {postalCode: string, country: string};
// type User = {name: string, address: Address | undefined};

// function isAddress(address: Address | undefined): boolean {
//   return address !== undefined;
// }
// const amir: User = {
//   name: 'Amir',
//   address: {postalCode: '75010', country: 'France'}
// };

// let address: Address;
// if (isAddress(amir.address)) {
//   address = amir.address;
// } else {
//   address = {postalCode: 'unknown', country: 'unknown'};
// }
// console.log(address.postalCode);
// // type error: Type 'Address | undefined' is not assignable to type 'Address'. Type 'undefined' is not assignable to type 'Address'.

// type Address = {postalCode: string, country: string};
// type User = {name: string, address: Address | undefined};
// // NOTE: Here the new operator: address is Address.
// function isAddress(address: Address | undefined): address is Address {
//   return address !== undefined;
// }
// const amir: User = {
//   name: 'Amir',
//   address: {postalCode: '75010', country: 'France'}
// };
// let address: Address;
// /* Calling `isAddress` narrows the type of `amir.address` because it's a
//  * type predicate. */
// if (isAddress(amir.address)) {
//   address = amir.address;
// } else {
//   address = {postalCode: 'unknown', country: 'unknown'};
// }
// console.log(address.postalCode);
// // Output: 75010

// type Address = {postalCode: string, country: string};
// function isAddress(address: Address | undefined): address is Address {
//   return address !== undefined;
// }
// console.log(isAddress({postalCode: '75010', country: 'France'}));
// // Output: true

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

// Second, let's recap the terminology, since there's a lot of it. We've seen type narrowing, type guards, and type predicates.
// Type narrowing lets us write separate code to handle union alternatives. For example, if we have a number | undefined variable, we can write separate code to handle the number case vs. the undefined case.
// Type guards are special expressions used inside of if conditions, like if (Array.isArray(...)) or if (typeof n === 'number'). We use them to narrow types. They also work inside switch statements and ternary expressions like typeof x === 'number' ? x : y.
// Type predicates let us write our own functions that act as type guards. TypeScript comes with some type predicates predefined, like Array.isArray, but we can define our own as well.


