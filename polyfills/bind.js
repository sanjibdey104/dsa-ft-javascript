console.log("polyfill for BIND in JS");

let agentOne = {
  name: "Ethan Hunt",
  missions: 7,
  org: {
    orgName: "MI6",
    place: "Washington DC",
  },
};

function completeMission(greeting, question, message, blabbering) {
  this.missions++;
  console.log(this?.org?.orgName);
  console.log(
    `${greeting}, ${this.name}. ${question}. ${message}. ${blabbering}`
  );
}

Function.prototype.myBind = function (obj, ...args) {
  let targetFunc = this;
  let context = obj;
  return function () {
    targetFunc.call(context, ...args, ...arguments);
  };
};

let resultMethod = completeMission.myBind(
  agentOne,
  "Hello",
  "Where have you been?"
);
resultMethod("I've missed you", "Let's fight bruh!!!");

//------------------------- Borrowing functions
// let runner = {
//   name: "Runner",
//   run: function (speed) {
//     console.log(`${this.name} runs at ${speed} mph.`);
//   },
// };

// let flyer = {
//   name: "Flyer",
//   fly: function (speed) {
//     console.log(`${this.name} flies at ${speed} mph.`);
//   },
// };

// let hybridFunc = runner.run.myBind(flyer, 30);
// hybridFunc();
// flyer.fly(40);

//------------------------ with setTimeout
// let avenger = {
//   name: "Thor",
// };

// function sayMyName() {
//   console.log(`All hail the mighty, ${this.name}`);
// }

// let sayItLater = sayMyName.bind(avenger);

// setTimeout(() => sayItLater(), 2000);

//--------------------------------------------------------------------------------------

//---------------------------------- CAUTION 🚧 THIS WON'T WORK 🚧

// Function.prototype.myBind = function (obj, ...args) {
//   let targetFunc = this;
//   let context = obj;
//   return () => {
//     targetFunc.call(context, ...args, ...arguments);
//   };
// };

//-------------------------- Neither would this
// Function.prototype.myBind = function (obj, ...args) {
//   let targetFunc = this;
//   let context = obj;
// let resultFunc = () => {
//   targetFunc.call(context, ...args, ...arguments);
// };
// return resultFunc;
// };

/*
Since arrow function doesn't have its own "this" defined. so the "arguments" would be that of the wrapper function
Arguments(3) [{…}, 'Hello', 'Where have you been?', callee: (...), Symbol(Symbol.iterator): ƒ]
0: {name: 'Ethan Hunt', missions: 8, org: {…}}
1: "Hello"
2: "Where have you been?"
*/
