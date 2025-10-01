// Array example
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
// apple
console.log(fruits.length);
// 3
console.log(typeof fruits);
// "object"
console.log(Array.isArray(fruits)); // true
// Objects and arrays together
const data = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
};
console.log(data.users[0].name);
// Alice
