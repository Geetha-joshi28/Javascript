// -------- 17/01/24 -----------

/* 
// sync,async
// how to take only specific properties  from objects
// how to take only specific items in plate from arrays
// how may methods are in array to achieve immutable

let plate=[1,2,3,4,5]
plate.splice(2,1)
plate[2] // 3
let plate2=[...plate]
plate.slice(2,1) / / [ ]




*/

// ---------------------------------------------------------------------------------------------------------------------------------------------------

// JAVASCRIPT , typescript , ECMA SCRIPT , HOW JS PROGRAM EXECUTE

// JS-> is a dynamic progrmainig language

//  synchronous --- direct call stack

// Asynchronous -- event loop, then call stack

setTimeout(() => { first }, 1000) -2nd
setTimeout(() => { first }, 2000) -2nd
setInterval -3rd
Promises  -- 1st

// type script is super set of javascript

// it assign dynamically what type it is

/* ------------------------------------------------------ */

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



setTimeout(()=>{
  console.log("arjun")
}, 1000 )

setTimeout(()=>{
  console.log("prakash")
}, 2000)

setTimeout(()=>{
  console.log("john")
}, 500 )


new Promise((resolve,reject)=>{
  console.log("from promise")
  resolve('done')
}).then(result=>{
  console.log(result)
})


function add(a=1,b=5){
  return a+b
}

console.log("geetha")

const result1 = abc();

const result2 = abc();

const result3 = add();

console.log(result1);

/* -------------------------------------------------------------- */

let apple=10;
let boat=20
[{
  name="geeta",
  age=24,
  let={ abc(a,b) {
    return a+b
  }

  }
}
]
console.log(boat[0])
b.abc()
let a1=2;
let b1=3;
let result=abc
result()


/* -------------------    destrucure   --------------------------------------------- */

// hint: think of destructure
function show({info:name, id:age}){
  // let {info:name, id:age} = a;

  console.log(name,age) // arjun , 12
}

show({info:"arjun",id:12})














