// unions_with_never
// const name1: string = 'Amir';
// const name2: string | never = name1;
// console.log(name2);
// // Amir

function returnNumberOrNever(): number | never {
  return 1;
}
const n: number = returnNumberOrNever();
console.log(n);
