// Challenge 2 Starter
const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
};

// Deep clone the complexObject three times using the spread operator for shallow cloning
// const deepClone = structuredClone(userObject);

// const copyUserObject1 = JSON.parse(JSON.stringify(userObject));
// const copyUserObject2 = JSON.parse(JSON.stringify(userObject));
// const copyUserObject3 = JSON.parse(JSON.stringify(userObject));

const copyUserObject1 = { ...userObject };
const copyUserObject2 = { ...userObject };
const copyUserObject3 = { ...userObject };
console.log(copyUserObject1);

// Store the cloned objects in an array
const copyUserObject1Array = Object.entries(copyUserObject1);
console.log(copyUserObject1Array);

// Sort the array of cloned objects based on the 'age' property in ascending order
const sortArray = copyUserObject1Array.sort((a, b) => (a.age > b.age ? 1 : -1));

// Log the sorted array to the console
console.log(sortArray);
