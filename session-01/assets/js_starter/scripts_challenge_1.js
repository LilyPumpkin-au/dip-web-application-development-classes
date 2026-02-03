// Initialise the array
let users = [
    [1, "password1"],
    [2, "password2"],
    [3, "password3"],
];

// Define the function update pasword
function updatePassowrd(){
    return users.map((user) => user[1] + "hththth");
}

// call the function with the numbers array
let updatedUsers = updatePassowrd(users);

// Console log the new array
console.log(updatedUsers);