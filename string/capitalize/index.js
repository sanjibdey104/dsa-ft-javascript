let sampleStr = "heLLo woRlD";

// Approach - 1
// function capitalize(str) {
//   let strArr = str.split(" ");
//   strArr = strArr.map((str) => {
//     return str
//       .toLowerCase()
//       .split("")
//       .map((char, index) => {
//         return index === 0 ? char.toUpperCase() : char.toLowerCase();
//       })
//       .join("");
//   });
//   return strArr;
// }

// Approach - 2
function capitalize(str) {
  let strArr = str.split(" ");
  strArr = strArr
    .map((str) => {
      return str[0].toUpperCase() + str.substring(1, str.length).toLowerCase();
    })
    .join(" ");
  return strArr;
}
let result = capitalize(sampleStr);
console.log(result);
