let firstName = "hero";
console.log(typeof firstName);
firstName = undefined; // type coherison will happen if two different primitives
console.log(typeof firstName);

let name = 1;
let user = "1";

name == user; // true

name === user; // false

// let data = {name: 'geetha'}

// let data1 = {name: 'geetha'}

// data == data1 // false

// data === data1 // false

let data = { name: "geetha" };

let data1 = data;

data == data1; // true

data === data1; // true

// primitive --> strings, boolean,numbers,null,defined,symbols --> call by value --> immutable
// non-primitive --> objects, arrays,functions, Date --> call by reference --> mutable

// == compares the value, no data type check
// if - primitive checks values no need data type check,no references
// if - non- primitives check values and references

// === compares same datatype and same call by reference
// if - primitive checks values and data type check,no references
// if - non- primitives checks datatype and references

// firstName == lastName; // true

console.log(firstName == lastName);
