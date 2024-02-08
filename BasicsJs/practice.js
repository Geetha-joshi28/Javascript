/* -------------------map-------------------------------- */


let vegetables = [
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name:"veg", contains: ["potato","beetroot"] },
  { name:"veg", contains: ["tomato","carrot"] },
  {name:"nonveg" , contains: ["fish","meat"]},
  { name: "all", contains: ["fish", "meat", "carrot"] }
  
]




// {
//   veg: [["potato", "beetroot"],  ["tomato","carrot"]],
//   nonveg: [["fish", "meat"]],
//   all: ["fish","meat","carrot"]
// }

 let user1=user.filter((item)=> item.name==="geetha" && item.age=="23" && item.mobile !==undefined);
 console.log(user1)
 

// who is having mobile prop and age is < 30 and want geetha user
[{ name: "geetha", age: 23, mobile: 123, adhar: 123 }];


let user = [
  { name: "geetha", age:28, mobile: 1234, adhar: 123, year:2023 },
  { name: "arjun", age: 28, mobile: 21 },
  { name: "arjun", age: 32 },
  { name: "hero", age: 34 },
  { name: "geetha", age: 32, mobile: 234, adhar: 434 },
];



function groups(){
  let obj = {} 
  for (let i = 0; i < user.length; i++){
    if (user[i].name in obj) {
      obj[user[i].name].push(user[i])
    } else {
      obj[user[i].name] = [user[i]]
      
    }
  }
  return obj
}


let test = {
  geetha: [
    { name: "geetha", buy: "mobile", mobile: 1234, adhar: 123, year:2023 },
    { name: "geetha", age: 32, mobile: "234", adhar: 434 },
  ],
  arjun: [
    { name: "arjun", age: 28, mobile: 21 },
    { name: "arjun", age: 32 },
  ],
  hero: [{ name: "hero", age: 34 }],
};

test.geetha.length // 2



let user2 = [
  { name: "geetha", age: 28, mobile: 1234, adhar: 123, buy: "mobile" ,year:2023 },
  { name: "arjun", age: 28, mobile: 21,buy: "pen",year:2023 },
  { name: "arjun", age: 32, buy: "pencil",year:2023 },
  { name: "hero", age: 34 , buy: 'bike',year:2023 },
  { name: "geetha", age: 32, mobile: 234, adhar: 434, buy: "car",year:2023 },
];

function find( name, year=2023) {
  
}

find("geetha") // 
[
  { name: "geetha", age: 28, mobile: 1234, adhar: 123, buy: "mobile", year: 2023 },
  { name: "geetha", age: 32, mobile: 234, adhar: 434, buy: "car",year:2023 },

]



