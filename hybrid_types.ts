// function double(n: number): number {
//   return n * 2;
// }
// double.isDoubleFunction = true;
// console.log([double(3), double.isDoubleFunction]);
// // [6, true]

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
// // ['courses', '/courses/typescript']

type Path = {
  (suffix: string): string;
  prefix: string;
};
function buildPath(prefix: string): Path {
  function path(suffix: string) {
    return `/${prefix}/${suffix}`;
  }
  path.prefix = prefix;
  return path;
}
// const path: Path = buildPath('courses');
// console.log([path.prefix, path('regexes')]);

const path: Path = buildPath('users');
console.log([path.prefix, path('amir')]);
