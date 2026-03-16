// //////////////// Destructuring /////////////////////////
// https://www.w3schools.com/js/js_destructuring.asp

// // JavaScript の Destructuring（分割代入） は、配列やオブジェクトの中から値を 簡単に取り出して変数に代入できる文法 です。
// 問題1：配列の分割代入

// 次の配列から 2番目の値だけ を取り出して second という変数に代入してください。
const fruits = ["apple", "banana", "cherry"];
let [first, second, third] = fruits;
console.log(second); // 出力：banana

// 問題2：オブジェクトの分割代入
// 次のオブジェクトから name と city を取り出して、それぞれの変数に代入してください。

const user = {
  name: "Ken",
  age: 30,
  city: "Perth",
};

const { name, city } = user;

console.log(name); // 出力：Ken
console.log(city); // 出力：Perth
