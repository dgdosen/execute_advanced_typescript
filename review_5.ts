// // hybrid_types
// interface Path {
//   (suffix: string): string;
//   prefix: string;
// }
// function coursePath(suffix: string) {
//   return `/${coursePath.prefix}/${suffix}`;
// }
// coursePath.prefix = 'courses';
// const coursePath2: Path = coursePath;
// console.log([coursePath2.prefix, coursePath2('typescript')]);
// // //['courses', '/courses/typescript']

// // any_and_unknown_in_generic_constraints
// type ItemsObject<A extends Array<any>> = {
//   items: A;
// };
// const itemsObject: ItemsObject<Array<number>> = {
//   items: [1, 2, 3],
// };
// console.log(itemsObject);
// // //{items: [1, 2, 3]}

// // function_overloads
// function double(n: number): number;
// function double(s: string): string;
// function double(n: number | string): number | string {
//   if (typeof n === 'number') {
//     return n * 2;
//   } else {
//     const doubled = Number(n) * 2;
//     return doubled;
//   }
// }
// // This is supposed to be a string, but it ends up holding a number!
// const s: string = double('6');
// console.log(s);
// //12

// // function overloads
// function double(n: number): number;
// function double(s: string): string;
// function double(n: number | string): number {
//   if (typeof n === 'number') {
//     return n * 2;
//   } else {
//     const doubled = Number(n) * 2;
//     return doubled.toString();
//   }
// }
// // type error: This overload signature is not compatible with its implementation signature.

// // validating_data_manually
// type Comment = {
//   message: string;
// };
// function hasMessageProperty(obj: {}): obj is { message: unknown } {
//   return 'message' in obj;
// }
// function parseCommentJson(json: string): Comment | undefined {
//   const parsed: unknown = JSON.parse(json);
//   if (typeof parsed === 'object') {
//     if (parsed !== null) {
//       if (hasMessageProperty(parsed)) {
//         if (typeof parsed.message === 'string') {
//           return { message: parsed.message };
//         }
//       }
//     }
//   }
//   return undefined;
// }
// console.log(parseCommentJson('{"message": "Now you have two problems."}'));
// // { message: 'Now you have two problems.' }

// // hybrid_types
// type Path = {
//   (suffix: string): string;
//   prefix: string;
// };
// function buildPath(prefix: string): Path {
//   function path(suffix: string) {
//     return `/${prefix}/${suffix}`;
//   }
//   path.prefix = prefix;
//   return path;
// }
// const path: Path = buildPath('courses');
// console.log([path.prefix, path('regexes')]);
// // //['courses', '/courses/regexes']

// // keyof_with_typeof
// const icons = {
//   rightArrow: 'fake right arrow image',
//   leftArrow: 'fake left arrow image',
//   billing: 'fake billing image',
// };
// function Icon(props: { name: keyof typeof icons }) {
//   return icons[props.name];
// }
// console.log(Icon({ name: 'downArrow' }));
// // type error: Type '"downArrow"' is not assignable to type '"rightArrow" | "leftArrow" | "billing"'.

// // function_overloads
// function pluralize(n: undefined): undefined;
// function pluralize(s: string): string;
// function pluralize(s: string | undefined): string | undefined {
//   return s === undefined ? undefined : s + 's';
// }
// const cats: string = pluralize('cat');
// const dogs: string = pluralize('dog');
// const anUndefined: undefined = pluralize(undefined);
// console.log([cats, dogs, anUndefined]);
// // [ 'cats', 'dogs', undefined ]

// // partial_is_a_mapped_type
// type OurPartial<T> = {
//   [P in keyof T]?: T[P];
// };
// type User = {
//   email: string;
//   age: number;
// };
// const user: OurPartial<User> = {
//   age: 36,
// };
// console.log(user);
// // { age: 36 }

// // validating_data_manually
// type Comment = {
//   message: string;
// };
// function hasMessageProperty(obj: {}): obj is { message: unknown } {
//   return 'message' in obj;
// }
// function parseCommentJson(json: string): Comment | undefined {
//   const parsed: unknown = JSON.parse(json);
//   if (typeof parsed === 'object') {
//     if (parsed !== null) {
//       if (hasMessageProperty(parsed)) {
//         if (typeof parsed.message === 'string') {
//           return { message: parsed.message };
//         }
//       }
//     }
//   }
//   return undefined;
// }
// console.log(
//   parseCommentJson('{"message": {"message": "Now you have two problems."}}'),
// );
// // undefined

// // partial_is_a_mapped_type
// type Nullable<T> = {
//   /* Mapped type goes here. */
//   [P in keyof T]: T[P] | null;
// };
// type Company = {
//   name: string;
//   yearFounded: number;
// };
// const company1: Nullable<Company> = { name: 'Shure', yearFounded: null };
// const company2: Nullable<Company> = { name: null, yearFounded: 1925 };
// /* We pull the properties back out to make sure your types are correct. */
// const name: string | null = company1.name;
// const yearFounded: number | null = company1.yearFounded;
// console.log([name, yearFounded]);
// // [ 'Shure', null ]

// // any_and_unknown_in_generic_constraints
// function wrapSet<SetType extends Set<any>>(
//   theSet: SetType,
// ): { theSet: SetType } {
//   return { theSet };
// }
// const set1 = wrapSet(new Set<number>([1]));
// const set2 = wrapSet(new Set<string>(['a']));
// // We convert the sets into arrays so we can actually see what's inside them.
// console.log([[...set1.theSet], [...set2.theSet]]);
// // [[1], ['a']]

// // keyof_with_typeof
// type Icons = {
//   rightArrow: string;
//   billing: string;
// };
// const icons: Icons = {
//   rightArrow: 'fake right arrow image',
//   billing: 'fake billing image',
// };
// type IconName = keyof Icons;
// const iconName: IconName = 'rightArrow';
// console.log(iconName);
// // rightArrow


