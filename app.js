// customary
console.log("hello world");

//-----------------------------------------------------------------------------------
// Swap 2 integers present in variables num1 and num2 without using temporary variable

// let num1 = 25;
// let num2 = 50;

// [num2, num1] = [num1, num2];
// console.log(num1, num2);

// resources:
// https://dmitripavlutin.com/swap-variables-javascript/

//-----------------------------------------------------------------------------------
// Write a function which returns true if given value of number is an integer without using any inbuilt functions

function checkForInterger(num) {
  console.log(typeof num, num % 1);
  return num % 1 === 0;
}

// console.log(checkForInterger("3"));

let personObj = {
  firstName: "James",
  lastName: "Bond",
  getFullName: function () {
    console.log(
      `Actual function: The name is ${this.lastName}, ${this.firstName} ${this.lastName}`
    );
    let innerFunction = () => {
      console.log(
        `Inner function: The name is ${this.lastName}, ${this.firstName} ${this.lastName}`
      );
    };
    innerFunction();
  },
  getArrowFullName: () => {
    console.log(this);
    console.log(
      `The name is ${this.lastName}, ${this.firstName} ${this.lastName}`
    );
  },
};
// personObj.getArrowFullName();

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  login(result) {
    console.log(`${this.name}, ${result ? "logged in" : "logged out"}`);
  },
};
// user.login(false);
// console.log(user.login);

// askPassword(
//   () => user.login(true),
//   () => user.login(false)
// );
// askPassword(user.login.bind(user, true), user.login.bind(user, false))

function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

const greet = function () {
  console.log(`Hello, ${this.firstName} ${this.lastName}`);
};

const student1 = new Student("James", "Bond", "Mathematics");
greet.call(student1);
