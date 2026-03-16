// 呼び出し時に（）がいるか、いらないか
// 関数 → () が必要（まだ計算されていない）
// 計算済みの値 → () 不要（すでに結果が入っている）

// ① () がいる場合 → 関数を呼び出すとき
// 状況	例	ポイント
// 変数に関数が入っている	const double = (x) => x * 2;	関数はまだ計算されていないので、実行するには () が必要
// 関数を呼び出すとき	double(5)	引数を渡して計算して値を得る

// 例：

// const double = (x) => x * 2;
// console.log(double(5)); // 10 ← 関数を計算して出力
// ② () がいらない場合 → すでに計算された値を使うとき
// 状況	例	ポイント
// 変数に計算済みの値が入っている	const doubled = [1,2,3,4,5].map(x => x * 2);	doubled はもう配列 [2,4,6,8,10] を持っているだけ
// 配列や定数など、関数ではない値を使うとき	console.log(doubled)	計算はすでに終わっているので () は不要

// 例：

// const numbers = [1,2,3,4,5];
// const doubled = numbers.map(x => x * 2);
// console.log(doubled); // [2,4,6,8,10] ← 計算済みなので () 不要

// ArrowFunction /////////////////////////////////////////
// 問題1：基本のアロー関数

// 次の普通の関数をアロー関数に書き換えてください。

// function greet(name) {
//   return "Hello, " + name + "!";
// }

const greet = (name) => "Hello, " + name + "!";

console.log(greet("Lily"));

// 問題2：配列操作でのアロー関数

// 次の配列 numbers を2倍にした新しい配列を作るコードを、アロー関数を使って書いてください。

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);

//問題①（map + アロー関数）
// 次の配列があります。
const numbers2 = [3, 6, 9, 12];
// すべての数字を 3倍 にした新しい配列を map と アロー関数を使って作ってください。
// 変数名は tripled にしてください。

const tripled = numbers2.map((num) => num * 3);
console.log(tripled);

// 問題②（filter + アロー関数）
const numbers3 = [5, 12, 8, 20, 3];
// この中から 10より大きい数字だけ を取り出して
// 新しい配列 bigNumbers を作ってください。

const bigNumbers = numbers3.filter((num) => num >= 10);
console.log(bigNumbers);

/////////////////////////////////////////////
// map と filter の違い（すごく大事）

// map()	各要素を 変換する
// filter()	条件で 残す or 捨てる
////////////////////////////////////////////

// map + 条件付きアロー関数問題

// 配列
const scores = [40, 55, 70, 90];
// ルール
// 60未満 → "Fail"
// 60以上 → "Pass"
// 結果はこうなる配列
// ["Fail", "Fail", "Pass", "Pass"]
// map と アロー関数で作ってみてください

// const result = scores.map((num) => {
//   if (num >= 60) {
//     return "Pass";
//   } else {
//     return "fail";
//   }
// });

// 三項演算子
const result = scores.map((num) => (num >= 60 ? "Pass" : "Fail"));

console.log(result);

// 次の問題
// 配列
const users = ["Yuki", "Ken", "Anna"];
// これを HTMLのリスト形式にしてください。
// 結果
// [
//   "<li>Yuki</li>",
//   "<li>Ken</li>",
//   "<li>Anna</li>"
// ]

const list = users.map((user) => `<li>${user}</li>`).join("");
console.log(list);
