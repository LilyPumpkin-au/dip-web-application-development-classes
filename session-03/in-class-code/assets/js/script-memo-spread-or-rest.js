// ///////////////////// REST と　Speread Operator の見分け方　/////////////////////
// /////////////////////
//  Rest = まとめる（左側で…）
//  Spread = 展開する（右側で…）
// /////////////////////

//  1️⃣ 「…」があるけど場所で役割が変わる

// # A. Rest（残りをまとめる）

//  使う場所：左辺（変数宣言・関数の引数）
//  意味：残りの要素やプロパティをまとめて「変数」に格納
//  例：配列の分割代入

// const fruits = ["apple", "banana", "cherry", "orange"];
// const [first, ...rest] = fruits;

// console.log(first); // "apple"
// console.log(rest);  // ["banana", "cherry", "orange"]

//  例：オブジェクトの分割代入

// const person = { name: "Alice", age: 25, country: "Japan" };
// const { name, ...others } = person;

// console.log(name);   // "Alice"
// console.log(others); // { age: 25, country: "Japan" }

// ポイント：左側にある → rest。

// /////////////////////

// # B. Spread（展開してコピー／結合）

//  使う場所：右辺（配列やオブジェクトを展開したいとき）
//  意味：配列やオブジェクトの中身を「展開して別のものに入れる」
//  例：配列をコピー

// const fruits = ["apple", "banana"];
// const fruitsCopy = [...fruits, "orange"];
// console.log(fruitsCopy); // ["apple", "banana", "orange"]

//  例：オブジェクトをマージ

// const defaults = { theme: "light", showSidebar: true };
// const settings = { ...defaults, showSidebar: false };
// console.log(settings); // { theme: "light", showSidebar: false }

// ポイント：右側にある → spread。

// /////////////////////

//  見分ける魔法のルール

// 1. 左側 = rest（まとめる）
// 2. 右側 = spread（展開する）
// 3. 関数の引数の場合：

//     `function f(...args)` → rest（まとめる）
//     `f(...arr)` → spread（展開する）

// /////////////////////
