let sampleStrOne = "Newenyh Newen";
let sampleStrTwo = "tennet";

// function checkForPalindrome(str) {
//   let sanitizedStr = str
//     .replace(/[^a-zA-Z0-9\ ]/g, "")
//     .split(" ")
//     .join("")
//     .toLowerCase();
//   return sanitizedStr === sanitizedStr.split("").reverse().join("");
// }

function palindromeCheck(str) {
  let sanitizedStr = str
    .replace(/[^a-zA-Z0-9\ ]/g, "")
    .split(" ")
    .join("")
    .toLowerCase();

  let strLen = sanitizedStr.length;
  let flag = false;

  //--------------- O(n)
  // for (let i = 0; i < sanitizedStr.length; i++) {
  //   flag = sanitizedStr[i] === sanitizedStr[strLen - i - 1];
  // }
  //--------------- O(log n)
  for (let i = 0; i < sanitizedStr.length / 2; i++) {
    flag = sanitizedStr[i] === sanitizedStr[strLen - i - 1];
  }
  return flag;
}

result = palindromeCheck(sampleStrTwo);
console.log(result);
