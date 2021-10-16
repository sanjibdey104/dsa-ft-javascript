let sampleString = "james bond";

// function reverseString(str) {
//   if (typeof str === "string") {
//     // using built in methods
//     let newStr = str.split("").reverse().join("");
//     return newStr;
//   } else console.log("please pass a valid string");
// }

function reverseStringTwo(str) {
  if (typeof str === "string") {
    let resultStr = "";
    // vanilla for looping
    for (let i = str.length - 1; i >= 0; i--) {
      let char = str[i];
      resultStr += char;
    }
    return resultStr;
  } else console.log("Please pass a valid string");
}

let finalStr = reverseStringTwo(sampleString);
console.log(finalStr);
