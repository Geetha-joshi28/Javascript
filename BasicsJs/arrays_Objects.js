const input1 = [1, 2, 3, 4, 4, 2]; //6
const input2 = [2, 4, 2, 4, 5, 6, 7, 8];

const rest1 = [1, 6, 4, 3];
const rest2 = [7, 3, 5];

const output1 = [3];
const output = [2, 4, 4, 2]; //[2,4]

let currentelement = 1;

currentelement.includes(2, 4);
// let test = [1,2]

// test.push(3) // [1,2,3]

// if (!test.includes(3)) {
//   test.push(3)
// }

// Wrie a function fo find Common values from two arrays

function commonValues(input1, input2) {
  for (let i = 0; i < input1.length; i++) {
    const currentElement = input1[i]; // input[1]
    if (input2.includes(currentElement)) {
      if (!output.includes(currentElement)) {
        output.push(currentElement); // [2,4,]
      }
    }
  }
}
return output;

let common = commonValues(input1, input2); //[2,4,4,2]
let commo1 = commonValues(rest1, rest2); //[2,4,4,2]
console.log(common); // [2,4]
/* ========================================================= */

let data = [
  { name: "geetha", age: 23 },
  { name: "arjun", age: 28 },
  { name: "hero", age: 34 },
];

let nations = [
  { name: "geetha", clolor: "red" },
  { name: "arjun", color: "blue" },
];
//reuse multiple,
// avoid duplicate code

function modifying(data) {
  let fresh = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === "geetha") {
      fresh.push({ ...data[i], name: "joshi" });
    } else if (data[i].name === "arjun") {
      fresh.push({ ...data[i], name: "prakash" });
    } else {
      fresh.push({ ...data[i] });
    }
  }
  return fresh;
}

function modifiedData() {
  return modifying(data);
}

modifiedData();

// [{},{},{}]
data[0].name === "geetha"; // [{}].push({...data[0],name:"joshi"})
data[0].name === "arjun"; // [{}].push({...data[0],name:"prakash"})

// spread operators
// for loop
// if condition

// [{name:"joshi",age:23},{name:"prakash",age:28},{name:"hero",age:34}]
