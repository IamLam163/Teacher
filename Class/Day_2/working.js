// const readline = require("readline");

const { range } = require("express/lib/request");
const { it } = require("node:test");

// let day = "Friday";

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "Wednesday":
//     console.log("Today is Wednesday");
//     break;
//   default:
//     console.log("What day of the week is it?");
// }

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question("What day of the week is it?");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What day of the week is it? ", (day) => {
//   switch (
//     day.toLowerCase() // Convert input to lowercase to handle case variations
//   ) {
//     case "monday":
//       console.log("It's Monday! Start of the workweek.");
//       break;
//     case "tuesday":
//       console.log("It's Tuesday! Keep going.");
//       break;
//     case "wednesday":
//       console.log("It's Wednesday! Midweek.");
//       break;
//     case "thursday":
//       console.log("It's Thursday! Almost the weekend.");
//       break;
//     case "friday":
//       console.log("It's Friday! Weekend is near.");
//       break;
//     case "saturday":
//       console.log("It's Saturday! Time to relax.");
//       break;
//     case "sunday":
//       console.log("It's Sunday! Rest and recharge.");
//       break;
//     default:
//       console.log("That doesn't seem like a valid day.");
//   }

//   rl.close();
// });

//Array Methods

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((_, num) => num * 2);
// console.log(doubled);

// const greater5 = doubled.filter((num) => num > 5);
// console.log(greater5);

// const sum = doubled.reduce((num, total) => num + total);
// console.log(sum);

// const fruits = ["Apple", "Banana", "Cherry"];
// fruits.forEach((fruit) => console.log(fruit));

// const arr = Array(8).fill(doubled);
// console.log(arr);

// const empty = Array(5)
//   .fill(0)
//   .map((_, index) => index + 1);
// console.log(empty);
// console.log(empty[0]);
// console.log(empty[Math.floor(empty.length / 2)]);
// console.log(empty[empty.length - 1]);

// const itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon"
// ];
// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
// console.log(itCompanies[itCompanies.length - 1]);
//console.log(itCompanies.map((change) => change.toUpperCase()));
//console.log(itCompanies.toString());
//console.log(modifiedCompanies);
//console.log(modifiedCompanies.sort());

// Ternary Operators
//sayHello();

// Function
// Function expression

let me = function hello(a, b) {
  console.log("Hello World");
  //console.log(this);
};
const sayHi = (b) => {
  console.log(b);
};
//me();
//console.log(this); // ✅ {} (Empty object in Node.js)
const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

person.greet();
const boy = {
  name: "Ayo",
  contacts: {
    phone: "0812",
    network: ["mtn", "glo", "airtel"],
    card_no: "5522"
  },
  complexion: "dark"
};

console.log(boy.contacts.network[0]);
