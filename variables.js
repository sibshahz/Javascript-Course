// var name = "Shahid";
// console.log(name);
// var name = "Gillani"; // No error
// console.log(name);

// let: cannot be redeclared in the same scope
// let age = 25;
// age = 30;

// function myFunction() {
//   let age = 55;
//   console.log("Age value inside myFunction: ", age);
// }
// myFunction();
// Error
// age = 30; // ■ Reassignment allowed
// console.log(age); // 30
let iAmYoung = false;
let myAge = 30;
let newAge = Number("25");
let myIncome = 30.19;
let myName = "Sohail";
let newName = String("Adam");

console.log("New name is: ", newName);
let charc = "c";
console.log("New age: ", newAge);
console.log("Length of new name is: ", newName.length);
// const: cannot be reassigned or redeclared
const country = "Pakistan";
// country = "USA";
console.log(country); // "Pakistan"
