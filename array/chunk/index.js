let testArr = [0, 1, 2, 3, 4];
testArr = ["a", "b", "c", "d"];

// ([0 1 2 3 4],2)
// [0 1 2 3 4] --> [0 1]
// [2 3 4] --> [2 3]
// [4] --> [4]
// output --> [[0 1],[2 3], [4]]

let resArr = [];
function generateChunks(arr, size) {
  if (arr.length > size) {
    let chunk = arr.slice(0, size);
    let remainingArr = arr.slice(size);
    resArr.push(chunk);
    generateChunks(remainingArr, size);
    return resArr;
  }
  resArr.push(arr);
}

let result = generateChunks(testArr, 2);
console.log(result);
