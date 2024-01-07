/* Object creation ways */
// { } // literal
// new Object() / using new

// Object.create()

// constructor function

//key:value
// key always should be string or symbol
// value can be any data type
let user = {
  name: "geetha",
};

let market = user;
market.name = "arjun";

// console.log('before update', user);
// console.log('before market', market);

console.log("after update", user);
console.log("after market", market);

let user1 = {
  name: "geetha",
};

//immutable
let tester = 2;
let tester1 = tester;

console.log(tester == tester);

//mutable  // call by reference

let user = {
  name: "geetha",
  age: 23,
  hi: (name) => {
    console.log(name);
  },
};

let objName = "age";

console.log(typeof objName);
console.log(user[objName]);
console.log(user.name);
console.log(user["name"]);

let data = [
  1,
  2,
  3,
  function (name) {
    console.log(name);
  },
];
let market = [
  1,
  2,
  3,
  function (name) {
    console.log(name);
  },
];

data[0];
// array like objects
// {
//   0: 1,
//   1: 2,
//     2: 3,
//     3: () => { }
//     lenght:4

// }

data.push(4);

user.hi("geetha");
user.hi("arjun");
