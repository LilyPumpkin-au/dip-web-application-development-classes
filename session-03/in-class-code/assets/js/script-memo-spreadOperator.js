///////////////// Spread Operator ////////////////////
// https://www.w3schools.com/jsref/jsref_oper_spread.asp

// ...（ドット3つ）で書く記法で、配列やオブジェクトの中身をバラバラに展開するための機能です。
// The Spread Operator (...) spreads iterables into individual elements.

// The ... operator can be used to join arrays:
// ① 配列の結合
// [...a, ...b]

// The ... operator can copy arrays
// ② 配列コピー
// [...array]

// The ... operator can pass arguments to functions
// ③ 関数の引数
// func(...array)

// ④ オブジェクト結合
// {...obj1, ...obj2}

/////////////////////////////
// Rest operatorとの違い

// Spread（展開） → 広げる
// [...arr]

// Rest（まとめる） → 残りをまとめる
// const [a, ...rest] = arr
/////////////////////////////

////////// map と　... copy の違い //////////////////////////////////////////
// | 特徴               | `map`        | `...`               |
// | ---------------- | ------------ | ------------------- |
// | 新しい配列を作るか        | はい           | はい                  |
// | 元配列は変わるか         | いいえ          | いいえ                 |
// | 元配列の要素がオブジェクトの場合 | 参照コピー（浅いコピー） | 参照コピー（浅いコピー）        |
// | 処理の途中で値を変えられるか   | map内で加工できる   | コピーだけなので加工は別に書く必要あり |

// 問題 1：配列のコピー
const fruits = ["apple", "banana", "cherry"];

// スプレッド演算子を使って fruits のコピーを作り、fruitsCopy に代入してください。
// コピーした配列に "orange" を追加しても元の fruits 配列は変わらないことを確認してください。

const fruitsCopy = [...fruits];
fruitsCopy.push("Orange");
console.log(fruits); // [ "apple", "banana", "cherry" ]
console.log(fruitsCopy); // [ "apple", "banana", "cherry", "Orange" ]

// 問題 2：配列の結合
// 次の2つの配列があります。
const morning = ["coffee", "tea"];
const evening = ["milk", "water"];

// スプレッド演算子を使って、1つの配列 drinks にまとめてください。
const wholeDay = [...morning, ...evening];
console.log(wholeDay);

// 問題 3：オブジェクトのコピー
// 次のオブジェクトがあります。
const person = {
  name: "Alice",
  age: 25,
};

// person のコピーを personCopy に作ってください。
// コピーに city: "Perth" を追加してください。
// 元の person が変更されていないことを確認してください。

const personCopy = { ...person, city: "Perth" };
console.log(person); //Object { name: "Alice", age: 25 }
console.log(personCopy); //{ name: "Alice", age: 25, city: "Perth" }

// 問題 4：関数の引数に展開
// 次の関数があります。
function sum(a, b, c) {
  return a + b + c;
}

// 配列 [1, 2, 3] をスプレッド演算子を使って引数として渡してください。
const numbers = [1, 2, 3];
console.log(sum(...numbers)); //6

// 問題 5（応用）：配列とオブジェクトの組み合わせ
// 次の配列があります。
const arr1 = [1, 2];
const arr2 = [3, 4];
const obj = { x: 10, y: 20 };

// 配列を結合して [1, 2, 3, 4, 5] のような配列を作る。ただし、最後に 5 も追加してください。
// オブジェクトをコピーして { x: 10, y: 20, z: 30 } にしてください。

const arr3 = [...arr1, ...arr2, 5];
const objCopy = { ...obj, z: 30 };

console.log(arr3); //[ 1, 2, 3, 4, 5 ]
console.log(objCopy); //{ x: 10, y: 20, z: 30 }
