// Challenge 3 Starter
// Initialise the array
let numbers3Map = [1, 3, 5, 6, 7, 8];

// Check if the array includes the number 5
if (numbers3Map.includes(5)) {
  const resultSqureLess5 = numbers3Map
    // If true, filter out numbers less than 5
    .filter((num) => num <= 5)
    // Then square each number in the resulting array
    .map((num) => num * num);
  // Output the final array
  console.log("The Challenge 3 map result is " + resultSqureLess5);
} // Output a message if the number 5 is not in the array
else {
  console.log("The number 5 is not in the array.");
}
