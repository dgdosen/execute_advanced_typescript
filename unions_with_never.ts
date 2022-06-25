// const name1: string = 'Amir';
// const name2: string | never = name1;
// console.log(name2);
// // Amir

function returnNumberOrNever(): number | never {
  return 1;
}
const n: number = returnNumberOrNever();
console.log(n);
// 1

// These are two separate rules about never. First, impossible intersections give us the type never. Second, never can be removed from any union.
