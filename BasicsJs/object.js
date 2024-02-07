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

// -----------------------------  object examples -------------------------------------------------

let a = [10];
let b = [];

// string,number,boolean,[],{},functions,
let car = {
  name: "value",
  age: 12,
  moblie: "samsung",
  users: [
    {
      id: 12,
      role: "developer",
    },
    {
      id: 13,
      role: "tester",
    },
    () => {
      return "arjun";
    },
    {
      id: 14,
      role: "tester",
    },
  ],

  vegetables: {
    fruits: ["watermelon", "grapes", "banana"],
    sub: () => {
      return 5 + 6;
    },
  },

  show: function () {
    return function () {};
  },
};
car.users[2]();
car.vegetables.fruits[2];
car.vegetables.sub();
car.show;
car.show();
let func = car.show(); // () => {};
func(); // undefiend
car.users[0].role; //

car.users[2].id; //
console.log(car.vegetables);

console.log(car.vegetables.fruits);
console.log(car.vegetables.fruits[1]);

car.show(); //

car.show; //

/* -------- start ------- practice all object methods ------------------- */

let user = { name: " arjun" };

user.name = "geetha";

user.mobile = 123124;

let data = user;
delete user.mobile;
data.mobile = 3242234;
data.do = "hate";

// data-- > user-- > {}

console.log(user); //{ name: " geetha",mobile:3242,do:'hate' }

console.log(data); //{ name: " geetha",mobile:3242,do:'hate' }

let add = {
  name: "geetha",
  show: () => {
    return null;
  },
};

function Add() {
  // this = {}

  this.name = "geetha";
  this.show = () => {
    return null;
  };

  // return this
}

let result = new Add(); // {name:'geetha', show: ()=>{}}

//  java script its own Object

// function Object() {
// this = {}

// return this
// }

// let Object = new Object() // {}

let user = {
  name: "geetha",
  show: () => {
    return null;
  },
};

// object methods

// keys -- return array of keys of given object // [ "name", 'show' ]
// values - return array of values of given object //
// entries -- return array of array key values of given object

let data = {
  veg: ["tomato"],
  nonveg: function (name) {
    return "seeth";
  },
};

data.nonveg("geetha"); //

// Object.keys()
// let Object = {

//   keys: (obj) => { return [""] },
//   values: (obj) =>{ return [] }
// }

// Object.values(user)  / []
// Object.keys(user) // [""]

Object.keys(user); // ["name","show"]

Object.values(data); // [ ["tomato"], fun ]

let mydata = Object.values(data)[1](); // []

// [string][]

// [string,T][]  // [[key,value],[key,value]]

let user = [{ user: [{ child: [{ grandchild: ["geetha", "arjun"] }] }] }];

user.flat(); // [12,2,4]

let result1 = Object.entries(data); // [ [veg, ["tomato"]]  , [ nonveg ,fn ]  ]

result1 = [
  [veg, ["tomato"]],
  [nonveg, fn],
];

result1[0]; // [ veg, ["tomato"] ]

let man = result1[1]; // [ nonveg ,fn ]

let myfun = man[1]; // ()=>{ }

myfun();

/* ---------------------- end   ---------------------------------- */
const user = {
  username: geetha,
  age: 25,
  location: "bangalore",
};

function User1(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}
