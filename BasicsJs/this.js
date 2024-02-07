let veg = {
  fruits: { name: "apple" },
  name: "mango",
};

// let info;
let info = undefined;

let user = {
  name: "greeting",
  add: function (data, data1) {
    return this.name;
  },
  sub: function (name, age) {
    retrun[("arjun", name, this.name, age)];
  },
};

// this will look who is calling/applying,binding him
user.mul(); // mul is not an funtion
user.add(); // greeting
user.sub(); // name is notdefienf
user.add.name; // add

user.add.call(user, 1, 2); //
user.sub.call(user, "arun", 2); // ["arjun","arun",2  ]

user.add.apply(veg, [1, 2]); //
let test = user.add.bind(veg, [1, 2]);

test(); //

function sub(a, b) {
  return 2;
}

sub.name; // sub
sub.length; // 0

sub.caller; //

console.log(this); // {name:''}
console.log(test); // not defiend
