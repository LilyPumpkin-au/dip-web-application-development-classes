//////////////////////////// Ternary Operator （三項演算子） ////////////////////////////////
https://www.w3schools.com/js/js_if_ternary.asp
// The conditional operator is a shorthand for writing conditional if...else statements.
// It is called a ternary operator because it takes three operands.

// Syntax : (condition) ? expression1 : expression2
// 条件 ? 条件がtrueの時の値 : 条件がfalseの時の値

// 問題 1：単純な判定
// 次のコードの result に三項演算子を使って、score が 60 以上なら "合格"、そうでなければ "不合格" を代入してください。

const score = 75;
const result = (score >= 60) ? "Pass": "Fail";
console.log(result); // "合格" になるはず

// 問題 2：ネストされた三項演算子
// 次の変数 age をもとに、三項演算子で以下の判定をしてください：
// 18 未満 → "未成年"
// 18 以上 65 未満 → "成人"
// 65 以上 → "高齢者"

const age = 70;
const category = (age < 18)? "未成年": (age > 65) ? "高齢者": "成人";
console.log(category); // "高齢者" になるはず

// 問題 3：配列と三項演算子
// 配列の中身をチェックして、空なら "空です"、空でなければ "データがあります" を返す三項演算子を書いてください。

const data = [];
const message = (data.length === 0) ? "空です" : "データがあります";
console.log(message); // "空です" になる