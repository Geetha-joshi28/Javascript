// hoisting

// var , function
// top to bottom code-> no order execution
// it will place in to memory while compiling code

//  u defined a variable not assigned any value --> undefined
// neither declared no assigned value --> not defined

// let const
// top to bottom code-> order execution

// hoisting and scopes

function add() {
  console.log(name); // undefined
  console.log(sub()); // sub
  if (true) {
    var name = "geetha";
    console.log(name); // geetha
  }

  const add = () => {
    return [1, 2, 3];
  };
  console.log(add());
  function sub() {
    console.log("sub");
  }
  console.log(name); //geetha
}

add();

// hoisting

// var , function
// top to bottom code-> no order execution
// it will place in to memory while compiling code

//  u defined a variable not assigned any value --> undefined
// neither declared no assigned value --> not defined

// let const
// top to bottom code-> order execution

// hoisting and scopes

function add() {
  console.log(name); // undefined
  sub(); // sub
  if (true) {
    var name = "geetha";
    console.log(name); // geetha
  }

  const add = () => {
    return [1, 2, 3];
  };
  console.log(add());
  function sub() {
    console.log("sub");
  }
  console.log(name); //geetha
}

add();

// hoisting

// var , function
// top to bottom code-> no order execution
// it will place in to memory while compiling code

//  u defined a variable not assigned any value --> undefined
// neither declared no assigned value --> not defined

// let const
// top to bottom code-> order execution

// hoisting and scopes

function add() {
  console.log(name); // undefined
  sub(); // sub
  if (true) {
    var name = "geetha";
    console.log(name); // geetha
  }

  const add = () => {
    return [1, 2, 3];
  };
  console.log(add());
  function sub() {
    console.log("sub");
  }
  console.log(name); //geetha
}

add();

exmp;

var name = "arjun";
function add() {
  console.log(name); //arjun
  sub(); //sub
  if (true) {
    let name = "geetha";
    console.log(name); //geetha
  }

  const add = () => {
    return [1, 2, 3];
  };
  console.log(add()); //[1,2,3]
  function sub() {
    console.log("sub");
  }
  console.log(name); //arjun
}

add();
