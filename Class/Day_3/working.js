//const city = ["Lagos", "Abuja", "Rivers"];
//const chek = city.forEach((cities) => console.log(cities));
//console.log(1 == 1.0);

const numbers = [1, 2, 3, 4, 5];
const newNo = numbers.map((num) => num * 2);
// 1 * 2, 2 * 2, 3 * 2
// 0 * 2, 1 * 2,

//console.log(newNo.filter((news) => news > 4));
//console.log(numbers.reduce((sum, num) => sum + num));
//console.log(numbers.find((num) => num > 2));

const person = { name: "Ayo", age: 30, city: "Abuja" };
//console.log(Object.values(person));
function outterFunction(outervariable) {
  return function innerFunction(innerVariables) {
    console.log(`Outer: $(outerVariable), Inner: $(innerVariable)`);
  };
}
const closureExample = outterFunction("Hello");
//closureExample("World");

function counter() {
  let count = 0; //innervariable
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count
  };
}

const myCounter = counter();
//console.log(myCounter);
myCounter.increment(); //1
//console.log(myCounter.getCount());

function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(3));
console.log(triple(3));
