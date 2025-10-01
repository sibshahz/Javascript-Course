function outer() {
  let outerVar = "I am outside!";
  function inner() {
    console.log(outerVar);
    let innerVar = "I am in a function"; // Access outer variable
  }
  inner();
}
outer();
