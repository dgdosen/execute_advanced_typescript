// const json = '{"message": "Now you have two problems."}';
// const parsed: unknown = JSON.parse(json);
// const text: string = parsed.message;
// console.log(text);
// // type error: Object is of type 'unknown'.

// type Comment = {
//   message: string;
// };
// function parseCommentJson(json: string): Comment | undefined {
//   const parsed: unknown = JSON.parse(json);
//   if (typeof parsed === 'object') {
//     return { message: parsed.message };
//   }
//   return undefined;
// }

// console.log(parseCommentJson('{"message": "Now you have two problems."}'));
// // type error: Object is possibly 'null'.

// console.log(typeof null);
// // object

// type Comment = {
//   message: string;
// };
// function parseCommentJson(json: string): Comment | undefined {
//   const parsed: unknown = JSON.parse(json);
//   if (typeof parsed === 'object') {
//     if (parsed !== null) {
//       return { message: parsed.message };
//     }
//   }
//   return undefined;
// }
// parseCommentJson('{"message": "Now you have two problems."}');
// // type error: Property 'message' does not exist on type 'object'.

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
//         return { message: parsed.message };
//       }
//     }
//   }
//   return undefined;
// }
// console.log(parseCommentJson('{"message": "Now you have two problems."}'));
// // type error: Type 'unknown' is not assignable to type 'string'.

//type Comment = {
//  message: string;
//};
//function hasMessageProperty(obj: {}): obj is { message: unknown } {
//  return 'message' in obj;
//}
//function parseCommentJson(json: string): Comment | undefined {
//  const parsed: unknown = JSON.parse(json);
//  if (typeof parsed === 'object') {
//    if (parsed !== null) {
//      if (hasMessageProperty(parsed)) {
//        if (typeof parsed.message === 'string') {
//          return { message: parsed.message };
//        }
//      }
//    }
//  }
//  return undefined;
//}
//console.log(parseCommentJson('{"message": "Now you have two problems."}'));
////{ message: 'Now you have two problems.' }
//console.log(parseCommentJson('123'));
//// udefined
//console.log(parseCommentJson('{"text": "Now you have two problems."}'));
//// udefined
//console.log(
//  parseCommentJson('{"message": {"message": "Now you have two problems."}}'),
//);
//// udefined
//console.log(parseCommentJson('{"error": "Service temporarily unavailable."}'));
//// udefined

// // ways to nest ifs:
// if (typeof parsed === 'object') {
//   if (parsed !== null) {
//     if (hasMessageProperty(parsed)) {
//       if (typeof parsed.message === 'string') {
//         return {message: parsed.message};
//       }
//     }
//   }
// }
// // or
// if (
//   typeof parsed === 'object' &&
//   parsed !== null &&
//   hasMessageProperty(parsed) &&
//   typeof parsed.message === 'string'
// ) {
//   return {message: parsed.message};
// }
