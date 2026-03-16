// //////////////// Destructuring /////////////////////////
// https://www.w3schools.com/js/js_destructuring.asp

// ヒント
// 配列
// let [a, b] = array

// オブジェクト
// let {key} = object

// 名前を変えるとき
// let {key: newName}

/////////////////////////////////////////////////
// 配列とオブジェクトでは「取り出し方のルール」が違います。
// 配列 → 位置（順番）で取り出す
// オブジェクト → 名前（キー）で取り出す

// 配列は 位置で取り出すので、順番を維持する必要があります。
// [ id , country , (ここスキップ) , customer ]

// オブジェクトは キーで取り出します。
// 他のキーは「書かなければ無視」
/////////////////////////////////////////////////

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

// 問題①（配列 + Rest）
// 次の配列があります。
const numbers = [10, 20, 30, 40, 50];

// 条件
// 1番目 → first
// 2番目 → second
// 残り → others
// Destructuringで書いてください。

// 期待する結果
// console.log(first);   // 10
// console.log(second);  // 20
// console.log(others);  // [30, 40, 50]

const [first, second, ...others] = numbers;

console.log(first);
console.log(second);
console.log(others);

// 問題②（オブジェクト + デフォルト値）
// 次のオブジェクトがあります。
const product = {
  title: "Laptop",
  price: 1500,
};
// 条件
// title → productName
// price → cost
// stock → quantity（デフォルト値 0）
// Destructuringで書いてください。

// 期待する結果
// console.log(productName); // Laptop
// console.log(cost);        // 1500
// console.log(quantity);    // 0

const { title: productName, price: cost, stock: quantity = 0 } = product;
console.log(productName);
console.log(cost);
console.log(quantity);

///////////////////////////////////////
// ヒント
// key: newName = defaultValue
// オブジェクトでデフォルト値を付けるとき
// const { stock: quantity = 0 } = product;
// stock があれば → quantity に入る, stock がなければ → 0
///////////////////////////////////////

// 問題③（ネストされたDestructuring）
// 次のオブジェクトがあります。
const order = {
  id: 101,
  country: "Australia",
  langage: "English",
  customer: {
    name: "Alex",
    email: "alex@example.com",
  },
};
// 条件
// customer の中から
// name → customerName
// email → customerEmail
// を 1回のDestructuringで取得してください。

// 期待する結果
// console.log(customerName);  // Alex
// console.log(customerEmail); // alex@example.com
// ヒント
// { customer: { ... } }

const {
  customer: { name: customerName, email: customerEmail },
} = order;
console.log(customerName);
console.log(customerEmail);
