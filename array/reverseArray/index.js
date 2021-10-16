function reverseArr(arr) {
  if (typeof arr === "object") {
    let finalArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      finalArr.push(arr[i]);
    }
    return finalArr;
  } else console.log("please pass a valid array data type");
}

let sampleArr = ["name", "place", "animal", "thing"];
let result = reverseArr(sampleArr);
console.log(result);
