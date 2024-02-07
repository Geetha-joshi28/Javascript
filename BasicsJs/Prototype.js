const arr = new Array(); // []
const object = new Object(); // {}

const str = new String("arjun"); // "arjun"

const no = new Number(); // 0
//  protype type is an object we add properties
//  this can be accestion any child objects created from parents

let obj = {};
obj.add = "";

obj = {
  // add: function (a,b) { return a+b }
};

obj.hasOwnProperty();

let joker = {
  name: "joker",
  // add: function (a,b) { return a+b}
};

joker.add(1, 2); // 3

let market = {
  name: "market",
  // add: function (a,b) { return a+b}
};

// pure function same input equal to output
Object.prototype.name = function () {
  return this.name;
};

joker.name();
market.name();

// joker.add()
joker.hasOwnProperty();

let infosys = [];

let wipro = [];
wipro.push(45);

let tcs = [2];
tcs.mypush(2);

let user = [2];
user.mypush(2);

Array.prototype.mypush = function (value) {
  this[this.length] = value;
  return value;
};

let user1 = [{ name: "geetha" }, { name: "arjun" }];

//  [{ name: "joshi" }, {name:"prakash"}]

let fresh = [2, 3, 4];

fresh.includes(3); // true
fresh.includes(5); // false

user.indexOf(30); // 3
user.indexOf(40); // -1

Array.prototype.findIndex = function (value) {
  let isFound;
  for (let i = 0; i < this.length; i++) {
    isFound = this[i] === value; // i=1,  20 === 20 // true
    if (isFound) {
      //true
      return i;
    }
  }

  return -1;
};

user.findIndex(20); // 1
fresh.findIndex(4); // 2

let data = [1, 2, 3, 4, 5, 6];

Array.prototype.search = function (value) {
  let isFound;
  for (let i = 0; i < this.length; i++) {
    isFound = this[i] === value; // false
    if (isFound) {
      return isFound;
    }
  }
  return isFound;
};

data.search(3);

/* ---------------------------  map ------------------------------ */
// [] new array
// return what ever datatype u want based on condition or no condtion
//  if no retrun in callback function retrun undefiend
let data = [
  { name: "geetha", age: 23 },
  { name: "arjun", age: 28 },
  { name: "hero", age: 34 },
];

let nations = [
  { name: "geetha", age: 23, color: "red", mobile: 234 },
  { name: "arjun", age: 23, color: "blue", mobile: 123 },
];

// [ {name:"geetha", mobile: 234}, {name:"arjun",mobile:123}]

//reuse multiple,
// avoid duplicate code

function adding(data) {}

/* function modifying(data) {
  if(data.name==="geetha"){
        fresh.push({...data,name:"joshi"})
  }
  else if (data.name==="arjun"){
    fresh.push({...data,name:"prakash"})
  }
  else {
  fresh.push({...data})
  }
} */

function modifying(data, index) {
  if (data.name === "geetha") {
    return { ...data, name: "joshi" };
  } else if (data.name === "arjun") {
    return { ...data, name: "prakash" };
  } else {
    return { ...data };
  }
}

function simplified(data, index) {
  return {
    name: data.name,
    mobile: data.mobile,
  };
}

Array.prototype.map = function (cfn) {
  let fresh = [];
  for (let i = 0; i < this.length; i++) {
    fresh.push(cfn(this[i], i));
  }
  return fresh;
};

// iterate cfn function bansed on array elements
// return new array
data.map(modifying);

nations.map(simplified);

// /*-------------------filter prototype------------------------- */

/* ------------------------ filter ---------------------------------- */
// [] new array
// basesd on true condion it return entire element/value
// we are not doing modifications
// we cant return whatever we want just return value based on true
data1.filter((item) => {
  return item.age < 30;
});
Array.prototype.myfilter = function (cfn) {
  let fresh = [];
  for (let i = 0; i < this.length; i++) {
    if (cfn(this[i], i)) {
      fresh.push(this[i]);
    }
  }
  return fresh;
};
