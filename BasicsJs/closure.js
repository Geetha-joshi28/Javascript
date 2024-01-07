// closure functions // memorize/ persistant value even though after out function is executed
// private, encapsulation

// inner function can access the outer function variable even though outer function execution is completed
function add() {
  //lexical
  let count = 1;
  return () => {
    count++;
    return count;
  };
}

let show = add();

// let show = () => {
//     console.log(count);
// };

console.log(show());
console.log(show());
