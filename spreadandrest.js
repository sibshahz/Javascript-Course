// Spread examples (arrays)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
// console.log(arr2); // [1,2,3,4,5]

// Spread with objects (shallow copy / merging)
// const obj = { a: 1, b: 2 };

// const newObj = { ...obj, b: 25, c: 3 };
// // const newObj = { ...obj, b: 42, c: 3 };
// console.log(newObj); // { a:1, b:42, c:3 }
// console.log(obj);

const firstObj = {
  name: "Zohaib",
  age: 25,
};
console.log("First Object before copy: ", firstObj);

const secondObj = { ...firstObj, name: "Anwar" };

// secondObj.name = "Anwar";
console.log("Second object: ", secondObj);

console.log("First Object after copy: ", firstObj);

// Rest parameters in functions
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
