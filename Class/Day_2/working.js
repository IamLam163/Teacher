let number = 5;
if (number > 6) {
  console.log("The number is greater than 6");
} else {
  console.log("Number is less than 6");
}

let raining = true;
if (raining) {
  console.log("I will take an umbrella");
} else {
  console.log("I don't need an umbrella");
}

//Grades
let score = 49;
if (score >= 50) {
  console.log("Pass");
} else if (score >= 40) {
  console.log("Resit");
} else {
  console.log("Fail");
}

//Switch
let weather = "rainy";
switch (weather) {
  case "sunny":
    console.log("I will go out");
    break;
  case "rainy":
    console.log("I'll stay home");
    break;
  case "cloudy":
    console.log("I will need an umbrella");
    break;
  default:
    console.log("I don't know what to do");
}
