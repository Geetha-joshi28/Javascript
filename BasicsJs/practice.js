/* -------------------map-------------------------------- */
let user = [
  { name: "geetha", age: 23, mobile: 123, adhar: 123 },
  { name: "arjun", age: 28, mobile: 21 },
  { name: "arjun", age: 32 },
  { name: "hero", age: 34 },
  { name: "geetha", age: 32, mobile: 234, adhar: 434 },
];

// who is having mobile prop and age is < 30 and want geetha user
[{ name: "geetha", age: 23, mobile: 123, adhar: 123 }];

let test = {
  geetha: [
    { name: "geetha", age: 23, mobile: "123", adhar: 123 },
    { name: "geetha", age: 32, mobile: "234", adhar: 434 },
  ],
  arjun: [
    { name: "arjun", age: 28, mobile: 21 },
    { name: "arjun", age: 32 },
  ],
  hero: [{ name: "hero", age: 34 }],
};
