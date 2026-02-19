// Challenge 1 Starter
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

  // Method to change the age property
  // const changeAge(newAge) = function(){
  //   return this.age = newAge;
  // }
  changeAge: function (newAge) {
    return (this.age = newAge);
  }, //https://www.w3schools.com/js/js_object_methods.asp
};

// Execute the method to change the age
userObject.changeAge(40);

// Log the updated complexObject
console.log(JSON.stringify(userObject));
