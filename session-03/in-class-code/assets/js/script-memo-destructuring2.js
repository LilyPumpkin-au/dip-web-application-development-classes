// //////////////// Destructuring /////////////////////////
// https://www.w3schools.com/js/js_destructuring.asp

// ヒント
// 配列
// let [a, b] = array

// オブジェクト
// let {key} = object

// 名前を変えるとき
// let {key: newName}

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

// 問題①（配列のDestructuring）

// 次の配列があります。

const colors = ["red", "blue", "green", "yellow"];

// 条件
// 1番目 → firstColor
// 3番目 → thirdColor
// に Destructuringで代入してください。
// ※ 2番目と4番目は使いません。

// 期待する結果
// console.log(firstColor); // red
// console.log(thirdColor); // green

let [firstColor, , thirdColor] = colors;
console.log(firstColor);
console.log(thirdColor);

// 問題②（オブジェクトのDestructuring）
// 次のオブジェクトがあります。
const user2 = {
  name: "Lily",
  age: 28,
  country: "Japan",
};
// 条件
// name を userName
// country を nation
// という 別の変数名でDestructuringしてください。
// 期待する結果
// console.log(userName); // Yuki
// console.log(nation);   // Japan

let { name: userName, country: nation } = user2;
console.log(userName);
console.log(nation);
