// console.log(typeof Array.prototype.filter);

Array.prototype.filterPolyfill = function (callbackFn, context) {
  let resultArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn.call(context, this[i], i, this)) {
      resultArr.push(this[i]);
    }
  }
  return resultArr;
};

function doubleTheValue(val) {
  return val > 10;
}

const sampleArr = [1, 2, 3, 12, 15, 18];

let filteredArr = sampleArr.filterPolyfill(doubleTheValue);
console.log(filteredArr);

for (let i in sampleArr) {
  console.log(i);
}
