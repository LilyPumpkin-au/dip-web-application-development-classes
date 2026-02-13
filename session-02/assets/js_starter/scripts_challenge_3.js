// Challenge 3 Starter
// Initialise the array
let numbers3 = [1, 3, 5, 6, 7, 8];

// Check if the array includes the number 5
const incl5 = numbers3.includes(5);
console.log("The array includes 5 is " + incl5);

// If true, filter out numbers less than 5
if (incl5) {
  const resultCheckLess5 = numbers3.filter(cehckLess5);

  function cehckLess5(num) {
    return num <= 5;
  }

  // Then square each number in the resulting array
  let resultSqureLess5 = [];

  for (let i = 0; i < resultCheckLess5.length; i++) {
    resultSqureLess5.push(resultCheckLess5[i] * resultCheckLess5[i]);
  }

  // Output the final array
  console.log(
    "The result of Challenge 3 Square each number result is : " +
      resultSqureLess5,
  );

  // Output a message if the number 5 is not in the array
} else {
  console.log("The number 5 is not in the array.");
}
