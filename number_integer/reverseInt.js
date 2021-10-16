// let sampleInt = -1234;
let sampleInt = -1234;

// function reverseThatInt(num) {
//   let arr = num.toString().split("");
//   let numPart = arr
//     .filter((item) => parseInt(item))
//     .reverse()
//     .join("");
//   let sign = arr.filter((item) => !parseInt(item)).join("");
//   return sign ? parseInt(sign + numPart) : numPart;
// }

function reverseThatInt(num) {
  let reversedNum = parseInt(num.toString().split("").reverse().join(""));
  return num < 0 ? parseInt(reversedNum * -1) : parseInt(reversedNum);
}

let result = reverseThatInt(sampleInt);
console.log(result);
