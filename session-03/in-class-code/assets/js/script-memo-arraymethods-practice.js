///////////// Array ////////////////
// https://www.w3schools.com/jsref/jsref_obj_array.asp

// 問題1
// 配列のすべての数字を 2倍 にしてください。
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); //[2, 4, 6, 8]

// 問題2
// 50点以上の点数だけ取り出してください。

const scores = [30, 55, 70, 40, 90];

// 期待する結果
// [55, 70, 90]
const moreThan50 = scores.filter((num) => num >= 50);
console.log(moreThan50);

// 問題3
// 名前の配列を 大文字に変換してください。
const names = ["lily", "ken", "anna"];

const upper = names.map((name) => name.toUpperCase());
console.log(upper); //["LILY", "KEN", "ANNA"]

// 問題4
// 10以上の数字だけ取り出してください。
const numbers2 = [3, 10, 15, 7, 20];

const moreThan10 = numbers2.filter((num) => num >= 10);
console.log(moreThan10); //[10, 15, 20]

// 問題5
// ユーザー配列から 名前だけの配列を作ってください。

const users = [
  { name: "Lily", age: 25 },
  { name: "Ken", age: 30 },
  { name: "Anna", age: 22 },
];

const names2 = users.map((user) => user.name);
console.log(names2); // ["Lily", "Ken", "Anna"]

// 問題6
// 20歳以上のユーザーだけ取り出してください。

const users3 = [
  { name: "Lily", age: 18 },
  { name: "Ken", age: 30 },
  { name: "Anna", age: 22 },
];

// const usersAgeOver20 = users3.filter((user) => (user.age >= 20 ? true : false));
const usersAgeOver20 = users3.filter((user) => user.age >= 20);
console.log(usersAgeOver20);
// [
//   { name: "Ken", age: 30 },
//   { name: "Anna", age: 22 }
// ]

// 問題7
// 商品の 価格の合計 を出してください。

const prices = [100, 200, 300];
//
// const sumPrices = prices.reduce(myFunc);

// function myFunc(total, num) {
//   return (total += num);
// }

// こっちの書き方の方が簡潔
const sumPrices = prices.reduce((total, num) => total + num, 0);

console.log(sumPrices); //600

// 問題8（少し難しい）
// ユーザーの 名前だけの配列を作り、全て大文字にしてください。

const users4 = [
  { name: "lily", age: 25 },
  { name: "ken", age: 30 },
  { name: "anna", age: 22 },
];

const usersName = users4.map((user) => user.name.toUpperCase());
console.log(usersName); //["LILY", "KEN", "ANNA"]
