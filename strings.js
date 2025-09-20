const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "foxes";

const isWord = sentence.includes(word);

console.log(isWord);

// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? "is" : "is not"
//   } in the sentence`
// );
// Expected output: "The word "fox" is in the sentence"
