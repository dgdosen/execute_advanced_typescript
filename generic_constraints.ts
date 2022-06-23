// type User = {
//   name: string
//   age: number
// };
// function filterBelowAge(users: User[], limit: number): User[] {
//   return users.filter(user => user.age < limit);
// }
// const users = [
//   {name: 'Amir', age: 36},
//   {name: 'Gabriel', age: 7},
// ];
// const youngUsers = filterBelowAge(users, 10);
// console.log(youngUsers.map(user => user.name));
// // Output: ['Gabriel']

// type User = {name: string, age: number, country: string};
// type Cat = {name: string, age: number, vaccinated: boolean};
// function filterBelowAge(
//   things: Array<User | Cat>,
//   limit: number
// ): Array<User | Cat> {
//   return things.filter(thing => thing.age < limit);
// }
// const peopleAndCats = [
//   {name: 'Amir', age: 36, country: 'France'},
//   {name: 'Ms. Fluff', age: 4, vaccinated: true},
// ];
// const youngOnly = filterBelowAge(peopleAndCats, 10);
// console.log(youngOnly.map(thing => thing.name));
// // Output: ['Ms. Fluff']

// const users: User[] = [
//   {name: 'Amir', age: 36, country: 'France'},
// ];
// const youngOnly: User[] = filterBelowAge(users, 10);
// // type error: Type '(User | Cat)[]' is not assignable to type 'User[]'. Type 'User | Cat' is not assignable to type 'User'.

// function filterBelowAge<T>(things: Array<T>, limit: number): Array<T> {
//   return things.filter(thing => thing.age < limit);
// }
// // type error: Property 'age' does not exist on type 'T'.

// function filterBelowAge<T extends {age: number}>(
//   things: Array<T>,
//   limit: number
// ): Array<T> {
//   return things.filter(thing => thing.age < limit);
// }

// type User = {name: string, age: number, country: string};
// const allUsers: User[] = [
//   {name: 'Amir', age: 36, country: 'France'},
//   {name: 'Gabriel', age: 7, country: 'France'},
// ];
// const youngUsers: User[] = filterBelowAge(allUsers, 10);
// console.log(youngUsers.map(user => user.name));
// // Output: ['Gabriel']

// type Cat = {name: string, age: number, vaccinated: boolean};

// const allCats: Cat[] = [
//   {name: 'Ms. Fluff', age: 4, vaccinated: true},
//   {name: 'Wilford', age: 17, vaccinated: true},
// ];
// const youngCats: Cat[] = filterBelowAge(allCats, 10);
// console.log(youngCats.map(cat => cat.name));
// // Output: ['Ms. Fluff']


// function filterBelowAge<T extends {age: number}>(
//   things: Array<T>,
//   limit: number
// ): Array<T> {
//   return things.filter(thing => thing.name === 'Amir');
// }
// // type error: Property 'name' does not exist on type 'T'.

type Animal = {
  species: string
};
type Appointment<A extends Animal> = {
  animal: A
};
function getAppointmentSpecies<A extends Animal>(
  appointment: Appointment<A>
) {
  return appointment.animal.species;
}

const appointment = {
  animal: {
    species: 'felis catus',
    name: 'Ms. Fluff',
  },
};
const species = getAppointmentSpecies(appointment);
console.log(species);

