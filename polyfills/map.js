let sampleArr = [12, 10, 2, 22];

function mapGreaterThan15(val) {
  if (val > 10) {
    return val;
  }
}

Array.prototype.mapPolyfill = function (callbackFn, context) {
  let resultArr = [];
  if (this !== null) {
    for (let i = 0; i < this.length; i++) {
      resultArr.push(callbackFn.call(context, this[i], i, this));
    }
  }
  return resultArr;
};

let finalArr = sampleArr.mapPolyfill(mapGreaterThan15);
console.log(finalArr);
