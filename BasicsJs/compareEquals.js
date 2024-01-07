
let firstName = "hero"
console.log(typeof firstName)
firstName = undefined // type coherison will happen if two different primitives
console.log(typeof firstName)


let lastName = '1'

// == compares the value no need check same datatype or same call by reference
// === compares the value and check same datatype or same call by reference

// firstName == lastName; // true

console.log(firstName == lastName);