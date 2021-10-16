// let testArr = [1, 2, 3, 4];
// testArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// testArr = [-1];
// testArr = [-2, -1];

// BRUTE FORCE APPROACH (SUCKS !!!😎)
// function maxSubArray(nums) {
//   let result = nums.reduce((acc, cur, index) => {
//     let endIndex = index + 1;
//     function generateChunks(curArr) {
//       if (curArr.length >= endIndex) {
//         acc = [...acc, curArr.slice(index, endIndex)];
//         endIndex++;
//         generateChunks(curArr);
//       } else return;
//     }
//     generateChunks(nums);
//     return acc;
//   }, []);

//   let maxSum = result[0][0];
//   result.forEach((element) => {
//     let elSum = element.reduce((acc, cur) => acc + cur);
//     if (elSum > maxSum) {
//       maxSum = elSum;
//     }
//   });
//   return maxSum;
// }

// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   nums.forEach((num, index) => {
//     let endIndex = index + 1;
//     function generateChunks() {
//       let arrItemSum = [nums.slice(0, endIndex)].reduce((acc, cur) => {
//         return acc + cur;
//       });
//       if (arrItemSum > maxSum) {
//         maxSum = arrItemSum;
//         generateChunks();
//       }
//     }
//     generateChunks();
//   });
//   //   return maxSum;
// }

// let result = maxSubArray(testArr);
// console.log(result);
