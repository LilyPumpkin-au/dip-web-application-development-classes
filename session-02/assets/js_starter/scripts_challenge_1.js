// Challenge 1 Starter

// Initialise the array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Use the pop() method to remove the last element from the array
numbers.pop();
console.log(numbers);

// Use the unshift() method adds new elements to the beginning of the array
numbers.unshift(6, 7);
console.log(numbers);

// Use the slice() method to exclude the first 3 elements and return a new array
numbers.slice(0, 2);
console.log(numbers.slice(0, 2));

// Set the value of the outputfield inner html to the new array
document.getElementById("OutputField1").innerHTML = numbers;
