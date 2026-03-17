// JavaScript Map Practice 2

// #  Q1 価格を10%アップ
// ### 問題
// const prices = [100, 250, 80, 420];
// 10%増しにした配列を作る。

// ###  答え
// const newPrices = prices.map((price) => price * 1.1);

// ###  ポイント
// * `map()` は **新しい配列を作る**
// * 数値の計算はそのまま書ける
// * 元の配列は変更されない（超重要）

// #  Q2 文字を大文字にする
// ### 問題
// const names = ["yuki", "haru", "sakura"];
// 全部大文字にする。

// ###  答え
// const upperNames = names.map((name) => name.toUpperCase());
// ###  ポイント

// * `toUpperCase()` は **メソッド**
// * `()` を忘れない
// * スペルミスに注意（toUppserCase ❌）

// #  Q3 オブジェクト → 文字列に変換
// ### 問題
// const users = [
//   { name: "Ken", age: 20 },
//   { name: "Mika", age: 17 },
//   { name: "Taro", age: 25 }
// ];

// `"Ken (20歳)"` の形にする。

// ###  答え
// const userAges = users.map((user) =>
//   `${user.name} (${user.age}歳)`
// );

// ###  ポイント
// * `map()` の引数は **配列の1要素**
// * `users.name` ではなく `user.name`
// * テンプレートリテラル便利！

// #  Q4 プロパティを加工する

// ### 問題

// const products = [
//   { name: "apple", price: 150 },
//   { name: "banana", price: 100 },
//   { name: "orange", price: 200 }
// ];

// `"APPLE - 150円"` の形にする。

// ###  答え

// const productsShow = products.map((product) =>
//   `${product.name.toUpperCase()} - ${product.price}円`
// );

// ###  ポイント
// * オブジェクトの中の値も自由に加工できる
// * メソッドとテンプレートリテラルの組み合わせ最強

// #  Q5 新しいオブジェクトを作る
// ### 問題
// const students = [
//   { name: "Ken", score: 80 },
//   { name: "Mika", score: 95 },
//   { name: "Taro", score: 60 }
// ];

// scoreをgradeに変換する。

// ###  答え（if版）
// const studentsGrade = students.map((student) => {
//   let grade;

//   if (student.score >= 90) {
//     grade = "A";
//   } else if (student.score >= 70) {
//     grade = "B";
//   } else {
//     grade = "C";
//   }

//   return {
//     name: student.name,
//     grade: grade
//   };
// });

// ###  スマート版
// const studentsGrade = students.map((student) => ({
//   name: student.name,
//   grade:
//     student.score >= 90
//       ? "A"
//       : student.score >= 70
//       ? "B"
//       : "C"
// }));

// ###  ポイント
// * `>=` と `=>` を間違えない
// * `else if`（elseifじゃない）
// * mapの中で **オブジェクトを返す**
// * `({ })` で包むとオブジェクトをそのまま返せる

// ## mapの本質

// array.map((element) => {
//   return 変換したもの;
// });

// mapは：
// > 「配列の中身を1つずつ取り出して、形を変えて、新しい配列を作る」
