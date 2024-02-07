// destructure
// creation  variables from object or arrays

let user = {
  info: "arjun",
  veg: [],
};

let {
  age,
  names = firstName,
  mob = mobile,
} = {
  name: "geetha",
  age: 12,
  mob: 23,
};
console.log(age, firstName, mobile);

// --------------------------------arrays--------------------
// creation of varaible from arrays or objects

// let [first,three,...rest] = [1,2,3,4,5]

rest; // [3,4,5]

let { name, ...rest } = {
  name: "geetha",
  age: 12,
  mob: 23,
  dataa: [],
  add: () => {},
  mul: 12,
};

let user1 = { ...user };

console.log(age, mob); // 12,23

// in new object I need all properties except name

// {
//
//   age: 12,
//   mob: 23,
//   dataa: [],
//   add: () => { },
//   mul: 12,uuser
// }
