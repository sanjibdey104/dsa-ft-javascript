const folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];

let result;
function flatten(acc, cur) {
  if (typeof cur !== "object") {
    return (acc = [...acc, cur]);
  } else {
    return cur.reduce(flatten, acc);
  }
}

let resultArr = folders.reduce(flatten, []);
console.log(resultArr);

// let resultArr = [];
// function flattenArr(arr) {
//   arr.forEach((item) => {
//     if (typeof item !== "object") {
//       resultArr = [...resultArr, item];
//     } else flattenArr(item);
//   });
//   return resultArr;
// }

// let result = flattenArr(folders);
// console.log(result);
