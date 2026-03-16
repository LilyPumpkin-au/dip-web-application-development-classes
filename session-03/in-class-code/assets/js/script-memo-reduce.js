// //////////////////////////// Reduce ////////////////////////////////
// https://www.w3schools.com/jsref/jsref_reduce.asp

// // The reduce() method executes a reducer function for array element.
// // The reduce() method returns a single value: the function's accumulated result.
// // The reduce() method does not execute the function for empty array elements.
// // The reduce() method does not change the original array.

// reduce は「配列を1つの値にまとめるための道具」
// 合計、文字列結合、条件抽出など色々な用途に使える
// accumulator と currentValue の役割を意識することが理解のコツ

// ////////////////////////////

// 1. 基本のイメージ

// reduce は 配列の各要素に対して順番に処理を行い、最終的に1つの値にまとめる メソッドです。

// 例えば、配列 [1, 2, 3, 4] の合計を求めたい場合：

// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // 10

// accumulator：これまでの合計（「たたみこみ中の値」）

// currentValue：現在処理している配列の要素

// 0：初期値（この場合、合計のスタートは 0 から）

// 処理の流れを図にすると：

// currentValue	accumulator	計算結果
// 1	0	0 + 1 = 1
// 2	1	1 + 2 = 3
// 3	3	3 + 3 = 6
// 4	6	6 + 4 = 10

// 最終的に 10 が返されます。

// 2. 文字列の結合にも使える
// const words = ["Hello", "World", "!"];

// const sentence = words.reduce((acc, word) => acc + " " + word);
// console.log(sentence); // "Hello World !"

// reduce は「数を合計するだけじゃない、文字列やオブジェクトもまとめられる」万能選手です。

// 3. 配列の加工にも応用できる

// 例えば、配列の中の偶数だけを集めたいとき：

// const numbers = [1, 2, 3, 4, 5, 6];

// const evens = numbers.reduce((acc, num) => {
//   if (num % 2 === 0) acc.push(num);
//   return acc;
// }, []);

// console.log(evens); // [2, 4, 6]

// ポイント：

// 初期値は空配列 []

// 条件に合う要素だけを push して、最終的にまとめた配列を返す
