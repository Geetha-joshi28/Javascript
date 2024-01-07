// function declaration
// return keywork it will return 
// void function if not return
function add(a=5, b=2) {
  console.log(b)
  console.log(a + b)
  return [1,2]
}

add(1, 4) // call/invoke a function
  console.log(add(1, 4))
// arrow function(annoynm function) -->new function declaration
(a, b) => { 
  console.log(a,b)
}

// function expression
// closure function , a funtion return another function
let add=(a, b) => {
  
  return (c=3) => {
    return a+b+c
   }
};
// add(1)(2)(3) // currying
console.log(add(1,2)(4))
// iife immediate invoke function expression
(function add(a = 5, b = 2) {
    console.log(b);
    console.log(a + b);
  
})(3,4)







const add = (a) => (b)=> (c)=> [a+b+c]

console.log(add(1,2,3))



// --------------------practise-----------------------------------------------------------------------------------------------



function add() {
  return {
    name: "geetha",
    address: "skjgafskjhkl",
  };
}
class1(); //{name:}

let data = [];

data;

let name = "geetha";

function add1() {
  let user = [
    {},
    "",
    12,
    true,
    null,
    function () {},
    undefined,
    () => {
      return [];
    },
  ];
  return user[0];
}

let user = [5, 6, 7]; //

user[2]; // 3

console.log(add1); //

let add = () => {
  console.log("test");
  let fn = () => {
    return {};
  };
  return fn;
};

let result = add(); //

console.log(result()); // {}

//

let data4 = {
  name: "getha",
  mob: 1321,
  home: "",
  hobies: [1, 2, 3],
};

let a = 10;
console.log(a); //

function abc(a = 5, b = 6) {
  let obj = {
    add: (a, b) => {
      return a + b;
    },
    sub: (a, b) => a - b,
    div: a / b,
    mul: a * b,
  };
  return obj;
}

const result1 = abc();
console.log(result1); //

let subcfn = result1.sub;
let addcfn = result1.add
let mulcfn = result1.mul

let c = 2;
let d = 3;

// resulable funciton 
function nonveg(cfn) {

  let result = cfn(c,d)
  return result 
}

nonveg(subcfn) //-1
nonveg(addcfn) //5

 






