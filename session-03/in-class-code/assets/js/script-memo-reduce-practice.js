// //////////////////////////// Reduce ////////////////////////////////
// https://www.w3schools.com/jsref/jsref_reduce.asp

syntax : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// reduce の初期値を渡す場合は , 0 を最後に追加できます

// // The reduce() method executes a reducer function for array element.
// // The reduce() method returns a single value: the function's accumulated result.
// // The reduce() method does not execute the function for empty array elements.
// // The reduce() method does not change the original array.

// reduce は「配列を1つの値にまとめるための道具」
// 合計、文字列結合、条件抽出など色々な用途に使える
// accumulator と currentValue の役割を意識することが理解のコツ

// ////////////////////////////
// 問題 1：配列の合計
// 次の配列の数値の合計を reduce を使って求めてください。
const numbers = [10, 20, 30, 40, 50];

// ここに reduce を書いて total に合計を代入してください
const total = numbers.reduce((total, current)=>{
    return total + current, 0;
});

console.log(total); // 150

// 問題 2：文字列の連結
// 次の配列をひとつの文字列に連結してください。単語の間はスペースで区切ります。
const words = ["JavaScript", "is", "fun"];

// reduce を使って sentence に連結
const sentence = words.reduce((total, current)=> {
    return total + " " + current, "";
});

console.log(sentence); // "JavaScript is fun"

// 問題 3：最大値を求める
// 次の配列の中で最も大きい値を reduce で求めてください。
const scores = [45, 82, 67, 99, 58];

// reduce を使って maxScore に最大値を代入
// const maxScore = scores.reduce((max, current)=>{
//    return (max > current) ? max = max : max = current;
// });

// max = max や max = current は不要です。
// return だけで値を返せば良いです：

const maxScore = scores.reduce((max, current) => (max > current ? max : current));

console.log(maxScore); // 99

// 問題 4：オブジェクト配列から合計
// 次のオブジェクトの配列の中で、price の合計を求めてください。

const items = [
  { name: "apple", price: 100 },
  { name: "banana", price: 200 },
  { name: "cherry", price: 300 },
];

// reduce を使って totalPrice に合計を代入
const totalPrice = items.reduce((total, item) => total + item.price, 0);

console.log(totalPrice); // 600

// 問題 5：条件付きでカウント
// 配列の中で 50 以上の数がいくつあるか数えてください。

const points = [12, 65, 34, 80, 50, 23];

// reduce を使って count にカウント
const count = points.reduce((count, current) => {
    return current >= 50 ? count + 1 : count;
}, 0); // 初期値は 0
// 初期値 0 を指定して、条件を満たすたびに +1 する
// 条件を満たさなければそのまま count を返す

console.log(count); // 3
\