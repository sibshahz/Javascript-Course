// Object example
const personOld = {
  name: "Alice",
  age: 25,
  languages: ["English", "French"],
  address: { city: "Paris", zip: "75000" },
};

personOld.languages.pop();
personOld.languages.push("Urdu");
personOld.address.houseNumber = 36;
// console.log(personOld.name);
// console.log(personOld["age"]);
// console.log(personOld.languages);
// console.log(personOld.address.city);
// console.log("House number is: ", personOld.address.houseNumber);

//Object literals and destructuring
// Object literal
const person = { name: "Alice", age: 25, city: "Paris" };
// Destructuring (basic)
const { name, age } = person;
// const { name, age } = person;
console.log(name); // Alice
console.log(age); // 25
// Destructuring with default values and renaming
const { city, country = "Pakistan", name: firstName } = person;
console.log(city);
// Paris
console.log("Country is: ", country);
// Unknown
console.log(firstName); // Alice
