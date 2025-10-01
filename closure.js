// Closure example
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    if (count > 10) {
      return "Your count has expired";
    } else {
      return count;
    }
  };
}
const secondCounter = makeCounter();
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
secondCounter();
console.log("Second counter value: ", secondCounter());
