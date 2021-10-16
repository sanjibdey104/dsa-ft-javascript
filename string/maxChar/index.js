let testString = "Renegade random";
testString = "I Lovvvvvveeee Doodles";
// testString = "1000777";

// function findMaxChar(str) {
//   let sanitizedStr = str.toLowerCase().split(" ").join("");
//   let obj = {};
//   const reducedMax = sanitizedStr.split("").reduce((acc, letter) => {
//     obj[letter] ? obj[letter]++ : (obj[letter] = 1);
//     return !acc // to fill acc on initial run, since it starts with null
//       ? (acc = { letter: letter, count: obj[letter] })
//       : obj[letter] > acc.count
//       ? (acc = { letter: letter, count: obj[letter] })
//       : acc;
//   }, null);
//   return reducedMax.letter;
// }

function findMaxChar(str) {
  // time complexity: O(n)
  // space complexity: O(1) // obj woduld have max 26 key-value pairs

  let sanitizedStr = str.toLowerCase().split(" ").join("");
  let obj = {};
  let maxChar = "";
  let maxCount = 0;
  sanitizedStr.split("").forEach((char) => {
    obj[char] ? obj[char]++ : (obj[char] = 1);
    if (obj[char] > maxCount) {
      maxChar = char;
      maxCount = obj[char];
    }
  });
  return maxChar;
}

let mostFrequentChar = findMaxChar(testString);
