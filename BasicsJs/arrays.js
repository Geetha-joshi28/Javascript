// array of objects -- >  [ {}, {}, {} ]

// aray of string --> ["", "", ""]

// array of numbers --> [123, 223 , 234]

//array of array --> [ [] , [] , [] ]

//  aray is collection of any data type

let data = [1, 2, 3];

let data1 = [1, 2, 3];

data.push(4);
console.log(data);

console.log(data == data1); //reference,values
console.log(data === data1); //refrence,value,datatype

let a = [];

let b = a;

a.push(2);
console.log(a, b);
console.log(a === b);

const add = () => {
  return 0;
};

const add1 = () => {};

let socket = 1;
let test = true;

console.log(add === add1);
console.log(socket === test);

/* ------------------------------------------------------------------------- */

let user = [
  {
    user: [
      {
        child: [
          {
            grandchild: [
              "geetha",
              () => {
                return { child: [{ name: "arjun" }] };
              },
            ],
          },
        ],
      },
    ],
  },
];

user[0].user[0].child[0].grandchild[1]().child[0].name;

/* 0----------------------------array methods-------------------------------------- */
let user = [4, 2, 3, , function add() {}]; //min

user[0]; // undefined

// add
user.push(1); // always last item/value will added
user[1] = "geetha"; // [ 1, "geetha" ]
user.unshift(6); // bad appraoch

// pop
user.pop(); // always last item/value will remove
user.shift(); // bad approach // always first item/value will remove

// in all ways- mostly middle replace or removal
user.splice(2, 2, "arjun"); // [3,4] // param1 = is array index ,  param2 --> how many u want to remove

// real life ---
// clone or copy of arrays
// --> spread, slice
let user1 = [1, 2, 3, "arjun"]; // wipro - 10 miiliions data

let tcs = [...user1]; // copying or cloning // immutable

let tcs1 = user1.slice(); // [ 1, 2, 3, "arjun"]
user1.slice(0); // [ 1, 2, 3, "arjun"]
user1.slice(1, 3); // [ 2, 3]

function slice() {
  return [...this];
}

/*----------  map ---------------------  */

// iterate cfn function based on array length
// return new array

let data = [
  { name: "geetha", age: 23 },
  { name: "arjun", age: 28 },
  { name: "hero", age: 34 },
];

let nations = [
  { name: "geetha", age: 23, color: "red", mobile: 234 },
  { name: "arjun", age: 32, color: "blue", mobile: 123 },
];

const simplified = (item) => {
  return item.name;
};

nations.map(simplified);

nations.map((item) => {
  return item.age;
});

// [23,32]

// ["geetha","arjun"]

// [{name:"geeths",age:23}, {name:"arjun",age:32}]

/*  */

/* ---------------------- */

let test = [];

// grren red,black
// grren red,black
// grren red,black

input1 = ["geetha", "arjun", "arjun", "prakash", "hero"];
input2 = ["arjun", "hero", "zero"];
arr1 = [1, 2, 3, 4, 2, 1];
arr2 = [3, 2, 4, 21, 4][(2, 4)][
  // [{name:"arjun"}, {name:"prakash"}]

  //obj2.includes(input[i]) // false
  // input2.includes(input[1]) // true -- [input[1]]
  // input2.includes(input[2]) // false

  (1, 2, 3)
]
  .includes(1)
  ["geeths"].includes("geetha")
  [{ name: "geetha" }].includes({ name: "geetha" }); //false

const obj1 = [{ name: "geetha" }, { name: "arjun" }, { name: "prakash" }];
const obj2 = [{ name: "hero" }, { name: "arjun" }, { name: "prakash" }];

function findingCommon() {
  let fresh = [];
  for (let i = 0; i < obj1.length; i++) {
    if (obj2.includes(obj1[i])) {
      if (fresh.includes(obj1[i])) {
        fresh.push(obj1[i]);
      }
    }
  }

  return fresh;
}
findingCommon();
//  ["arjun"]

/* ---------------------------------------------------------- */
let data = [
  { name: "geetha", age: 23 },
  { name: "arjun", age: 28 },
  { name: "hero", age: 34 },
];
let result = data.map((person) => {
  if (person.age <= 30) {
    return { [person.name]: person.age };
  }
});
console.log(result)[({ geetha: 23 }, { arjun: 28 })];
/* ------------------------ remove duplicates from array of objects --------------------------- */
let data1 = [
  { name: "geetha", age: 23, mobile: "123", adhar: 123 },
  { name: "arjun", age: 28 },
  { name: "arjun", age: 28 },
  { name: "hero", age: 34 },
  { name: "geetha", age: 23, mobile: "123", adhar: 123 },
];

function removeDuplicates() {
  let obj = {};
  for (let i = 0; i < data1.length; i++) {
    if (!(data1[i].name in obj)) {
      obj[data1[i].name] = data1[i];
    }
  }
  return obj;
}

const test = removeDuplicates(); //

/*  {
  
  "geetha" : { name: "geetha", age: 23, mobile: "123", adhar: 123 },
  "arjun": { name: "arjun", age: 28 },
  "hero": { name: "hero", age: 34 },
  
} */

Object.keys(test); // ["geetha","arjun","hero"]
Object.values(test); // [ {},{},{} ]
/* ---------------------- based on key input i need  array values from back ---------------------- */

// slice(-1) / []
//[1, 2, 3, 4].slice(-3); // [2,3,4]

function frozen(arr, key) {
  if (!key) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-key);
  }
}

frozen([1, 2, 3, 4]); // 4 arra.length
frozen([1, 2, 3, 4, 6, 7, 8]); // 4

frozen([1, 2, 3, 4], 2); // [3,4]
frozen([1, 2, 3, 4], 3); // [2,3,4]

/* ---------------------------------------------- */
