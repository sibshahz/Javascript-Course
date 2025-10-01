// Object example
const person = {
  name: "Alice",
  age: 25,
  languages: ["English", "French"],
  address: { city: "Paris", zip: "75000" },
};

person.languages.pop();
person.languages.push("Urdu");
person.address.houseNumber = 36;
console.log(person.name);
console.log(person["age"]);
console.log(person.languages);
console.log(person.address.city);
console.log("House number is: ", person.address.houseNumber);
