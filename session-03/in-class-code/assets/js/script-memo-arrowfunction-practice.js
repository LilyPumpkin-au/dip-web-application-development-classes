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
