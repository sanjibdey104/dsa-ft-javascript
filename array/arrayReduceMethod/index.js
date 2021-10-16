// array reduce method practical use cases

let testArr = [12, 14, 60, 16, 18];

//------------------------------- sum of array items

// let finalSum = testArr.reduce(function (acc, cur) {
//   acc = acc + cur;
//   return acc;
// }, 0);
// console.log(finalSum);

//------------------------------- max value from an array
// let maxVal = testArr.reduce(function (acc, cur) {
//   if (acc < cur) return (acc = cur);
//   else return acc;
// }, testArr[0]);

// function findMaxVal(arr) {
//   let curMax = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (curMax < arr[i]) curMax = arr[i];
// }
//   return curMax;
// }

//------------------------------- concatenated values from array

// const users = [
//   { id: 001, firstName: "Tom", lastName: "Cruise", age: 59 },
//   { id: 003, firstName: "Matt", lastName: "Damon", age: 51 },
//   { id: 005, firstName: "Keanu", lastName: "Reeves", age: 57 },
//   { id: 007, firstName: "Daniel", lastName: "Craig", age: 53 },
// ];

// let fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);

// let occurenceCount = users.reduce((age, cur) => {
//   if (age[cur.age]) age[cur.age]++;
//   else age[cur.age] = 1;
//   return age;
// }, {});

//------------------------------- return array of names

// let names = users.reduce((acc, cur) => {
//   acc.push(cur.firstName);
//   return acc;
// }, []);
// let names = users.reduce((acc, cur) => {
//   return [...acc, cur.firstName];
// }, []);
// console.log(users, names);

//---------------------------- creating a dictionary

// let reducedDictionary = users.reduce((acc, cur) => {
//   return { ...acc, [cur.id.toString()]: cur };
// }, {});

//--------------------------- all over 50 (polyfill for array.every)

// let allOverFifty = users.reduce((acc, cur) => {
//   if (!acc) return acc;
//   return cur.age > 50;
// }, true);

//--------------------------- any over 50 (polyfill for array.some)

// let anyOverFifty = users.reduce((acc, cur) => {
//   if (cur.age > 50) return true;
//   return acc;
// }, true);

// let anyOverFifty = users.reduce((acc, cur) => {
//   if (acc) return true;
//   return cur.age > 50;
// }, false);

//-------------------------- flatten an array

const folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];

function flatten(arr) {
  return [...arr];
}
const res = folders.reduce((acc, cur) => {
  return typeof cur;
}, []);
console.log(res);
