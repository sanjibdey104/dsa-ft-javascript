let sampleArr = [-2, 7, 11, 19];
// sampleArr = [3, 2, 4];
// sampleArr = [5, 5, -3];
// sampleArr = [3, -3];

function twoSum(nums, target) {
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    let otherHalf = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === otherHalf) {
        indices.push(i, j);
        return indices;
      } else return [];
    }
  }
}

let result = twoSum(sampleArr, 0);
console.log(result);
