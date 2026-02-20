///////////////////// Creating an Object​
// Each of these do the same thing:​
//     const car = {}​
//     const car = new Object()​
//     const car = Object.create({})​

///////////////////// Objects : Properties
//  propertyName : propertyValue​
// Example:​
const game = {
  title: "Gran Turismo",
  version: "6",
};

///////////////////// Objects: Accessing Properties​
// Access properties using the dot syntax:​
//   game.title​
// Accessing an unknown property:​
//   returns undefined​
// You can also use “array” type notation:​
//   game[‘players’]​

///////////////////// Objects: Setting Properties
// game.title = “Bearicades”

//////////////////// Objects: Creating New Properties​
// game.company = “9th Level Games”​
// game[‘url’] = “https://www.9thlevel.com”

//////////////////// Deleting Properties
// delete game.url​
// delete game[‘url’]

//////////////////// Passing Objects​
// !!!Objects are ALWAYS passed by REFERENCE​!!!
// !!!プリミティブ型の値を他の変数に代入すると、コピーが作られるだけで、元の変数とは独立しています。​!!!
let oldAge = 21;
let newAge = oldAge;
newAge = 32;
console.log(oldAge);
console.log(newAge);
// oldAge will still have 21 これはプリミティブ型だから。
// もしこれがオブジェクトだった場合は、変数には 参照（reference） が入るので、片方を変更するともう片方にも影響が出ます。
// プリミティブ型（number, string, boolean など）

//////////////////// Function :何か処理をまとめて再利用できる「独立した処理の塊」

// 名前付き関数
function greet(name) {
  console.log("Hello " + name);
}
greet("lily"); // → Hello lily

// 匿名関数（変数に代入）
const greet2 = function (name) {
  console.log("Hi " + name);
};
greet2("lily"); // → Hi lily

// アロー関数（ES6以降）
const greet3 = (name) => console.log("Hey " + name);
greet3("lily"); // → Hey lily

//////////////////// Methods :オブジェクトの中にある関数
const person = {
  name: "Lily",
  age: 28,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // → Hello, Lily

const person2 = {
  name: "Meron",
  greet() {
    console.log("Hi, " + this.name);
  },
};

person2.greet(); // → Hi, Meron

//////////////////// Parameter : 関数やメソッドに渡す入力値。
function add(a, b = 0) {
  return a + b;
}

console.log(add(3, 5)); // → 8
console.log(add(4)); // → 4 （bはデフォルト0）

// | 用語          | 意味          | 呼び方                           | 例                            |
// | ------------- | -----------   | --------------                  | ---------------------------- |
// | function  | 独立した処理          | `func()`                 | `function greet(name) {}`    |
// | method    | オブジェクトの中の関数 | `obj.method()`           | `const obj = { greet() {} }` |
// | parameter | 入力値                | 関数内で変数として使う     | `greet(name)`                |

///////////////////  Objects: De-structuring
/// extracting some properties
const { name, age } = person;
console.log({ name, age });

/// renameing
// const { name: firstName, age } = person;

///!!! Object points at the same object !!!
// If ​
// const a = { name: ‘Sue’ }​
// Then ​
// const b = a​
// Results in a and b pointing at the same object.​

/////////////////// Object : Shallow コピー
// 1段階だけコピーする。
// 中にオブジェクトがある場合は、
// 「中身」ではなく「参照（アドレス）」をコピーする。

// const user = {
//   name: "Lily",
//   address: {
//     city: "Perth"
//   }
// };

// const copy = { ...user };
// copy.address.city = "Tokyo";
// console.log(user.address.city); //　Tokyo

////////////////// Object : DEEP コピー
// ネストされた中身まで全部コピーする。
// 完全に別物になる。

// const user = {
//   name: "Lily",
//   address: {
//     city: "Perth"
//   }
// };

// const deepCopy = structuredClone(user);
// deepCopy.address.city = "Tokyo";
// console.log(user.address.city); // Perth

/// DeepClone Synatax
// 1 mordarn way
const original = [];
const copyLatest = structuredClone(original);

// 2 traditional
const copyJASON = JSON.parse(JSON.stringify(original));
// ❌ function 消える
// ❌ undefined 消える
// ❌ Dateが文字列になる
// ❌ Map, Set 使えない

/////////////////// Make a copy of an object
// use the SPREAD OPERATOR
let newUserObject = { ...userObject };

////////////////// Objects: Sorting an Array of Objects
const list = [
  { color: "purple", size: "XL" },
  { color: "red", size: "S" },
  { color: "black", size: "3XL" },
  { color: "green", size: "2XL" },
];

list.sort((a, b) => (a.color > b.color ? 1 : -1));
console.log(list);
// アルファベット順になった
// Array(4) [ {…}, {…}, {…}, {…} ]
// 0: Object { color: "black", size: "3XL" }
// 1: Object { color: "green", size: "2XL" }
// 2: Object { color: "purple", size: "XL" }
// 3: Object { color: "red", size: "S" }

list.sort((a, b) =>
  a.color > b.color ? 1 : a.color === b.color ? (a.size > b.size ? 1 : -1) : -1,
);
console.log(list);

///////////////////// Merging Objects
/// Use spread operator
const personName = {
  name: "Sebastian",
};

const personAge = {
  age: 53,
};

const thePerson = { ...personName, ...personAge };

console.log(thePerson);
//    Object { name: "Sebastian", age: 53 }
//    age: 53
//    name: "Sebastian"
