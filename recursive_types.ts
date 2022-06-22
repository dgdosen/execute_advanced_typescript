// recursive types! WTF

type NestedNumberArray = number | NestedNumberArray[];
let x: NestedNumberArray = [[[5]]];
console.log(x);

const n: NestedNumberArray = 1;
console.log('ok');

// const m: NestedNumberArray = {1: 2};
// console.log('ok');
// te

const o: NestedNumberArray = [1, 2, 3];
'ok';

const p: NestedNumberArray = [1, 2, [3, 4], 5];
'ok';

const q: NestedNumberArray = [[[[1]], 2, [3]]];
'ok';

type Json =
  | null
  | boolean
  | string
  | number
  | Json[]
  | {[key: string]: Json};

const json: Json = {name: 'Amir'};
'ok';

const json1: Json = [{name: 'Amir'}, {email: 'betty@example.com'}];
'ok';

const json2: Json = [1, [[[2]], 'three', [4]]];
'ok';
