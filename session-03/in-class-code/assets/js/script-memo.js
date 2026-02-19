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
