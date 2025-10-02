// Array example
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]);
// // apple
// console.log(fruits.length);
// // 3
// console.log(typeof fruits);
// // "object"
// console.log(Array.isArray(fruits)); // true
// // Objects and arrays together
// const data = {
//   users: [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//   ],
// };
// console.log(data.users[0].name);
// Alice

function mapHandler(value, index, completeArray) {
  console.log(
    `I am handling current array element at ${index} value: ${value} and complete array is: ${completeArray}`
  );
}
// array methods
const numbers = [1, 2, 3, 4, 5, -6];
// map -> transform values
// const doubled = numbers.map(mapHandler);
// const doubled = numbers.map(function (value, index) {
//   console.log(`Current value is: ${value} and current index is: ${index}`);
// });

// const doubled = numbers.map((value, index) => {
//   console.log(`Current value is: ${value} and current index is: ${index}`);
// });
const doubled = numbers.map((n) => n * 2); // [2,4,6,8,10]
console.log("Dobled: ", doubled);
// filter -> keep values matching condition
const evens = numbers.filter((n) => n % 2 === 0); // [2,4]
console.log("Evens: ", evens);
// reduce -> accumulate values (sum)
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15
// find -> first element matching condition
const firstEven = numbers.find((n) => n % 2 === 0); // 2
// some -> check if any element matches
const hasEven = numbers.some((n) => n % 2 === 0); // true
// every -> check if all elements match
const allPositive = numbers.every((n) => n > 0); // true
console.log("Every number in array is positive: ", allPositive);
console.log({ doubled, evens, sum, firstEven, hasEven, allPositive });
