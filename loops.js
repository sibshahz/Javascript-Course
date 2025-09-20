// for loop
// for (let i = 1; i >= 1; i++) {
//   console.log("Number: ", i);
// }
// Output: 1 2 3
// while loop
// let count = 1;
// while (count <= 3) {
//   console.log("Count:", count);
//   count++;
// }
// for...of (arrays)
// let fruits = ["Apple", "Banana", "Mango"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// for...in (objects)
let student = {
  name: "Ali",
  age: 21,
  grade: "A",
};
for (let key in student) {
  console.log(key, ":", student[key]);
}
