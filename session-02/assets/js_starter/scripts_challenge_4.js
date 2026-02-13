// Challenge 4 Starter
// Initialise the array
let numbers4 = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array
let index = numbers4.indexOf(5);
console.log(index);

// If the number 5 is found in the array
if (numbers4.includes(5)) {
  // Console log each number in the array up to and including 5
  let resultArray = numbers4.filter((num) => num <= 5);

  console.log("The challenge 4 result is " + resultArray);
} else {
  // Output a message if the number 5 is not in the array
  console.log("Number not in array");
}
