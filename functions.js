//named and nameless functions
function someFunc() {
  console.log("Named function was called");
}
someFunc();

// const someVar = function () {};

// function was used before it was declared

console.log(greet("Alice")); // Works even before definition

function greet(name) {
  return `Hello, ${name}!`;
}
const sayHi = function (name) {
  return `Hi, ${name}!`;
};
console.log(sayHi("Bob")); // ■ Error: sayHi is not defined yet

const arrowFunc = (arg1, arg2) => {
  console.log("Arrow Func: ", arg1 + arg2);
};
arrowFunc(5, 2);

// Default parameter
function greetDefault(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greetDefault("Subhan")); // Hello, Guest

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4));
