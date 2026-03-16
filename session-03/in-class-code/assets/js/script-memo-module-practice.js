// ///////////////////////// Module ///////////////////////////
// 1	複数の名前付きエクスポートをまとめて import
// 2	デフォルトエクスポートは {} なしで import
// 3	as で別名を付け、呼び出す時は別名そのまま

// 問題 1: 基本のモジュール読み込み
// 次のファイルがあります。
// math.js
export function add(a, b) {
  return a + b;
}

export const pi = 3.14;

// main.js
// // ここにimport文を書いて、add関数とpiを使って
// // 2と3の足し算と、piの値をコンソールに表示してください。
import { add, pi } from "./math.js";

let result = add(2, 3);
console.log(result); //5
console.log(pi); // 3.14

// 問い: main.js に書く import 文とコンソール表示を完成させてください

// 問題 2: デフォルトエクスポート
// logger.js
export default function log(message) {
  console.log("Log:", message);
}

// main.js
// // logger.js の log 関数を使って "Hello World" を表示してください
import log from "./logger.js";

log("Hello World"); // Log: Hello World

// 問い: デフォルトエクスポートのインポート方法を書いてください。

// 問題 3: 名前の衝突回避
// utils.js
export function print(value) {
  console.log("utils print:", value);
}

// logger.js
export function print(value) {
  console.log("logger print:", value);
}

// main.js
// utils.js と logger.js の print 関数を両方使って、
// utils の print で "A"、logger の print で "B" を表示してください。
import { print as printUtil } from "./utils.js";
import { print as printLogger } from "./logger.js";

printUtil("A"); // utils print: A
printLogger("B"); // logger print: B

// 問い: 名前の衝突を避けるimportの書き方を考えてください。

// 問題 4: モジュールの再エクスポート
// math.js
export function multiply(a, b) {
  return a * b;
}

index.js;
// math.js の multiply を再エクスポートしてください
export { multiply } from "./math.js";

main.js;
// index.js から multiply をインポートして、2*3 を計算してください
import { multiply } from "./index.js";
console.log(multiply(2, 3)); //6

// 問い: 再エクスポート（re-export）の書き方を完成させてください。
