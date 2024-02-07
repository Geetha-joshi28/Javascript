// spread and rest operators

let obj3 = {
  add: () => {
    return [];
  },
};

obj3.add();

let user2 = [
  2,
  3,
  3,
  5,
  6,
  function () {
    return 2;
  },
];

let user3 = [5, 4, 3, 2, 4];

let user4 = [...user2, ...user3]; // [2, 3, 3, 5, 6,5,4,3,2,4]
let user5 = user2.concat(user3); // [2, 3, 3, 5, 6,5,4,3,2,4] // immutable

let obj = {
  age: 23,
};

obj.age = 32; //
let obj1 = {
  ...obj,
  name: "",
};

let sambar = {
  dosha: 12,
  puri: 3423,
};

delete sambar;

let edli = {
  edli: 123,
};

let fresh = {
  ...sambar,
};

function add() {}

add(1, 2, 3);

23454321;

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

/* ------------------ rest ------------------------------- */
function add(...num) {
  console.log(num[5]);
}

add(1, 2, 3, 4, 5, 6, 7);
