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

// shallow copy
// const copyUserObject1 = { ...userObject };
// const copyUserObject2 = { ...userObject };
// const copyUserObject3 = { ...userObject };

// Deep copy
const copyUserObject1 = structuredClone(userObject);
const copyUserObject2 = structuredClone(userObject);
const copyUserObject3 = structuredClone(userObject);

// shallowcopyでもプリミティブ型の１階層目は参照じゃなくて、コピーになるので、反映される
copyUserObject1.age = 40;
copyUserObject2.age = 25;
copyUserObject3.age = 60;

copyUserObject1.firstName = "Mike";
copyUserObject2.firstName = "Michael";
copyUserObject3.firstName = "Mickey";

// これは、オブジェクトの中のオブジェクトなので、参照が入ってる。
// だから、shallowcopyでは、copyUserObject1 だけをかえてるのに、オリジナルのオブジェクトも２も３も全部のアドレスのcityがTokyoに変わってしまう。
// Deepcopy をすると、オリジナルも２も３もかわらない。このユーザの情報だけ変わる。
copyUserObject1.address.city = "Tokyo";

// Store the cloned objects in an array
const users = [copyUserObject1, copyUserObject2, copyUserObject3];
console.log("users array :", users);
console.log("user object original :", userObject);

// Sort the array of cloned objects based on the 'age' property in ascending order
const sortArray = users.sort((a, b) => (a.age > b.age ? 1 : -1));

// Log the sorted array to the console
console.log(sortArray);
