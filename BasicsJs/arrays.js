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
