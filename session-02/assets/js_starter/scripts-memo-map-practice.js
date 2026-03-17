///////  問題 1
// 配列 `numbers` の各要素を 2 倍した新しい配列を作りたいです。
const numbers = [1, 2, 3, 4, 5];

// 質問:
// * どのように `map` を使うと、[2, 4, 6, 8, 10] という配列が作れますか？

// 答え
const numbers2 = numbers.map((num) => num * 2);

// これと同じ意味
// const numbers2 = numbers.map((num) => { return num * 2 });

///////  問題 2:オブジェクト配列での map
// 以下の配列はユーザー情報です。
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 }
// ];

// 質問:
// 1. 各ユーザーの名前だけの配列を作ってください。
// 2. 各ユーザーの年齢に 5 年足した配列を作ってください。

// 答え
// 名前だけの配列
const userName = users.map((user) => user.name);

// 年齢に5足した配列
const userAgeAdd5 = users.map((user) => user.age + 5);

// ポイント
// 配列かどうかは [] で囲まれているかで判断
// 配列の要素が プリミティブ型 → そのまま値を扱う
// 配列の要素が オブジェクト → obj.property でアクセスできる

///////  問題 3:map の中で条件分岐

// 次の配列から、偶数なら `"even"`, 奇数なら `"odd"` に変換した新しい配列を作りたいです。
const nums = [1, 2, 3, 4, 5, 6];

// 質問:
// * `map` と条件分岐（`if` または 三項演算子）を使って `[ "odd", "even", "odd", "even", "odd", "even" ]` を作ってください。

// 答え
const evenOdd = nums.map((item) => (item % 2 === 0 ? "even" : "odd"));

// ポイント
// map → 各要素を変換して新しい配列を作る
// filter → 条件に合う要素だけ抽出する
// 矢印関数で中括弧 {} を使うときは return が必要
// 中括弧なしなら自動的に値が返る

//////  問題 4:map と文字列操作

// const fruits = ["apple", "banana", "cherry"];

// 質問:
// * 各フルーツの最初の文字を大文字にして、新しい配列を作ってください。
//   （例: "apple" → "Apple"）

// * map は必ず新しい配列を返す
// * 元の配列は変更されない
// * 返す値を自由に変換できる

// 答え

const fruits = ["apple", "banana", "cherry"];
const fruitsUpper = fruits.map(
  (fruit) => fruit[0].toUpperCase() + fruit.slice(1),
);
console.log(fruitsUpper); // ["Apple", "Banana", "Cherry"]

// 解説
// fruit[0].toUpperCase() → 最初の文字を大文字にする
// fruit.slice(1) → 2文字目以降をそのまま残す
// + で結合して新しい文字列を作る
// map で全ての要素を変換して新しい配列を作る

// ポイント
// toUpperCase は必ず () が必要
// 配列や文字列の範囲を取り出すときは slice(start, end) を使う
// map の引数は 単一要素を表す名前 にするとコードが読みやすい

// 問題 5：文字列の長さを取得
const words = ["hello", "world", "JavaScript", "map"];
// 質問:
// 各単語の文字数だけの配列を作ってください。
// 期待される結果: [5, 5, 10, 3]
// 答え
const wordsLength = words.map((word) => word.length);
console.log(wordsLength); // [5, 5, 10, 3]

// 問題 6：数値を文字列に変換
const nums = [1, 2, 3, 4, 5];

// 質問:
// 各数字を文字列に変換して、新しい配列を作ってください。
// 期待される結果: ["1", "2", "3", "4", "5"]
// 答え
const stringNums = nums.map((num) => num.toString());
console.log(stringNums); // ["1", "2", "3", "4", "5"]

///////////////////////////////////プロパティとメソッドの見分け方
// プロパティ = データ → () は不要　"apple".length
// メソッド = 動作 → () が必要      "apple".toUpperCase()

////// 問題 7：文字列配列を加工する
// const cities = ["perth", "sydney", "melbourne"];

// 質問:
// 各都市名の 最初の文字だけ大文字 にして、
// 残りの文字は小文字 のままにした新しい配列を作ってください。
// 期待される結果: ["Perth", "Sydney", "Melbourne"]

// ヒント
// 最初の文字 → charAt(0) または [0]
// 残りの文字 → slice(1)
// 最初の文字を大文字に → toUpperCase()
// 残りの文字を小文字に → toLowerCase()

// 答え
const citiesToUpper = cities.map(
  (city) => city.charAt(0).toUpperCase() + city.slice(1).toLowerCase(),
);
console.log(citiesToUpper);
