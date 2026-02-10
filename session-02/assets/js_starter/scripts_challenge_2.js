// Challenge 2 Starter
// Initialise the arrays
let array1 = [1, 2, 3, 2];
let array2 = [4, 5, 6, 4];

// Use the spread operator to merge the two arrays
let mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Use the Set object to remove duplicates
const mergedSetArray = new Set(mergedArray);
console.log(mergedSetArray); //表示される
console.log(`This is mergedSetArray : ${[...mergedSetArray]}`); //配列に変換してからじゃないと表示されない
console.log(`This is mergedSetArray : ${Array.from(mergedSetArray)}`); //配列に変換してからじゃないと表示されない

// Use array destructuring to assign the first three elements to variables
const [first, second, third] = mergedSetArray;
console.log(first, second, third);

// Set the value of the output filed to be the second element of the unique array
document.getElementById("OutputField2").innerHTML =
  `This is Challenge 2 : ${[...mergedSetArray]}`;
