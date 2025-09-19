// if...else
let score = 70;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
// Output: "Grade: B"

let something = false;

// somecondition ?

true && false
  ? console.log("Something is true")
  : console.log("Something is false");

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    //multiple lines can be executed
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
// Output: "Wednesday"
