// destructures // spread and rest operators

// Global scope variable can be access from any where
// var functional scope
// let / const--> block scope
// closures- lexical scope

//
// let data = 'global';

const sub = (data) => {
  // data = [{ name: 'test' }, { name: 'hero' }, { name: 'india' }];
  console.log("sub", data);
};

function add(cfn) {
  // const data = 'arjun';
  if (true) {
    // var data = 'geetha';
    console.log("inside", data);
    cfn(data);
  }
  console.log(data);
}

add(sub);

console.log("outside", data);
