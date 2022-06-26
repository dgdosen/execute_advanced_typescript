// const aName: { key: 'name' } = { key: 'name' };
// const aString: { key: string } = aName;
// console.log(aString);
// // { key: 'name' }

// const nameOrAge: { key: 'name' | 'age' } = { key: 'age' };
// const aString: { key: string } = nameOrAge;
// console.log(aString);
// // { key: 'age' }

// const aName: { key: 'name' } = { key: 'name' };
// const nameOrAge: { key: 'name' | 'age' } = aName;
// console.log(nameOrAge);
// // { key: 'name' }

// const aName: {key: 'name'} = {key: 'name'};
// const emailOrAge: {key: 'email' | 'age'} = aName;
// emailOrAge;
// // type error: Type '{ key: "name"; }' is not assignable to type '{ key: "email" | "age"; }'.

// type SpecificKey<T extends string> = { key: T };
// const nameKey: SpecificKey<'name'> = { key: 'name' };
// console.log(nameKey.key);
// // 'name'

// type SpecificKey<T extends string> = { key: T };
// const ageKey: SpecificKey<'name'> = { key: 'age' };
// console.log(ageKey.key);
// // type error: Type '"age"' is not assignable to type '"name"'.

// type SpecificKey<T extends string> = {key: T};
// const nameOrAge: SpecificKey<'name' | 'age'> = {key: 'age'};
// console.log(nameOrAge.key);
// // 'age'

// type SpecificKey<T extends string> = { key: T };
// const nameOrAge: SpecificKey<'name' | 'age'> = { key: 'email' };
// console.log(nameOrAge.key);
// // type error: Type '"email"' is not assignable to type '"name" | "age"'.

// type SpecificKey<T extends string> = { key: T };
// const nameOrAge: SpecificKey<'name' | 'age'> = { key: 'age' };
// const emailOrAge: SpecificKey<'email' | 'age'> = nameOrAge;
// console.log(emailOrAge);
// // type error: Type 'SpecificKey<"name" | "age">' is not assignable to type 'SpecificKey<"age" | "email">'.
