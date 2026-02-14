// Session 2 Memo
// JavaScriptでは：
// プリミティブ値（number, string など） → 値そのものが入る
// オブジェクト → メモリ上の「住所（参照）」が入る
// プロパティとは？ オブジェクトの中にある「名前付きの値」
// { test: "value" } この場合, test がプロパティ。
// fruitse[0].test = "changed"; // これはオブジェクトのプロパティを書き換えている

// Array
console.log("Scripts-memo.js");

// make an array
const a = [1, 2, 3];
const b = Array(1, "Web Tech", ["a", "b"]);

//////////////////////////////
// Array Methods
// Access elements, using [] index
console.log(a[0]); // 1
console.log(a[1]); // 2
console.log(a[2]); // 3

// length
console.log(a.length);
console.log(b);

// Method or Property? (メソッドなら（）がいる。プロパティなり最後にかっこがいらない)
console.log(typeof a.length); // number がかえってくる。つまり　lengthはメソッドではなくて、プロパティ
console.log(typeof b[1].toUpperCase); // function がかえってくる。toUppserCase はメソッド

// Copying an array to a new variable
// Use the spread operator [...array]
const fruits = ["banana", "apple", "pear"]; // original array
const morefruits = [...fruits]; // copied original arrays

//////////////////////////////
// Output
console.log(`fruits Array is :  ${fruits}`); // バッククォート` , ${variable}
console.log("morefruits Array is :" + morefruits); // クオーテーションマーク ""　+ variable  これは全部文字列に変換する。　object は　"object object" と表示されてしまう
console.log("morefruits Array is :", morefruits); // クオーテーションマーク ""　, カンマ variable　これは、文字列とオブジェクトを分けて表示してくれる
console.log("morefruits Array is :" + JSON.stringify(morefruits)); // ちゃんとプロパティと値が見れる　デバックで便利

//////////////////////////////
// add items on to the original array
// push() add item on the end
fruits.push("mango");
console.log(`push(): ${fruits} `);

// unshift() add item at the start
fruits.unshift("orange");
console.log(`unshift():  ${fruits}`);

// add multiple items
fruits.push("grape", "peach");
console.log(`push() multiple items: ${fruits}`);

fruits.unshift("melon", "water melon");
console.log(`unshift() multiple items: ${fruits}`);

// remove items, change the original array
// pop() remove from end
fruits.pop();
console.log(`pop(): ${fruits}`);

// shift() remove from front
fruits.shift();
console.log(`shift(): ${fruits}`);

// splice() remove from index position
fruits.splice(1, 2); // splice(the index start to remove, the index end to remove);
console.log(`splice():  ${fruits}`);

//////////////////////////////
// slice()
// Remove specific item, and Create new array
let slicedArray = fruits.slice(1, 5); // とりだしたアイテムだけで、新しい配列が作られる
console.log(`slice() sliced array:  ${slicedArray}`); // apple,pear,mango,grape
console.log(`slice() original array :  ${fruits}`);

//////////////////////////////
// Add element without Mutaion
// To add new element at teh front
const morefruits2 = ["orange", ...fruits]; // make new array, add "orange" at the start, rest is same as "fruits" array
console.log(`add new element morefruits2: ${morefruits2}`);

// To add new element at the end
const morefruits3 = [...fruits, "orange"]; // make new array, add "orange" at the end, rest is same as "fruits" array
console.log(`add new element morefruits3: ${morefruits3}`);

//////////////////////////////
// Arrays: Multi-Dimension (matrix) an arrya mey contain other arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
// 0: Array(3) [ 1, 2, 3 ]
// 1: Array(3) [ 4, 5, 6 ]
// 2: Array(3) [ 7, 8, 9 ]
console.log(matrix[0][0]); // 1
console.log(matrix[2][1]); // 8

//////////////////////////////
// fill
// fill() は既存の配列の中身を同じ値で埋める（破壊的メソッド）
//   「新しい配列を作る」のではなく、既存の配列を書き換える
//   もちろん new Array(n).fill(x) で作った場合は、新しい配列が作られる
// 数字や文字列などのプリミティブ値
//   値そのものが各インデックスに入る
//   変更しても他のインデックスには影響しない
// オブジェクトや配列などの参照型
//   「値」ではなく「メモリ上の住所（参照）」がコピーされる
//   だから 同じオブジェクトを参照しているインデックスすべてで、プロパティを変更すると同じ結果になる

// Arrays: Filling Arrays, create a new array and fill ith an initial valuse
// fill() は 配列の中身を指定した値で埋めるメソッド
// array.fill(value, start, end)
// fill はオブジェクトを参照したときは、「値をコピー」しているのではなく「参照をコピー」している
const fruitsb = Array(3).fill(0);

console.log("fruitsb is : " + fruitsb);

fruitsb[0] = "fill test";

console.log("fruitsb is :", fruitsb);

// それぞれ別オブジェクトにしたいなら：下記のように書くと、別のメモリの住所をさんしょうするようになるため、インデックスごとに値が変更できる
const fruitsc = Array.from({ length: 3 }, () => ({}));
// or
const fruitsd = new Array(3).fill(null).map(() => ({}));

//// fill はオブジェクトを参照したときは、「値をコピー」しているのではなく「参照をコピー」している
// プロパティとは？ オブジェクトの中にある「名前付きの値」
// { test: "value" } この場合, test がプロパティ。
// fruitse[0].test = "changed"; // これはオブジェクトのプロパティを書き換えている
// すべての値は、同じ参照先のメモリが入っているだけ。一つの値を変更すると、他のインデックスも同じ参照先を見ているだけのため、すべてのインデックスの値が同じになる。

const fruitse = Array(3).fill({ test: "first value" }); // 3つインデックスに、{ test: "value"}というオブジェクトのキーと値を入れるということ
console.log("fruitse is : ", JSON.stringify(fruitse)); // [{"test":"first value"},{"test":"first value"},{"test":"first value"}]
fruitse[0].test = "fill test second"; // change the index[0] to string
console.log("fruitse is :", fruitse); // index[1] and index[2] also changed to "fill test"
//     0: Object { test: "fill test second" }
//     1: Object { test: "fill test second" }
//     2: Object { test: "fill test second" }

// | 書き方     　       | 結果          |
// | `fill({})`        | 同じオブジェクトを共有 | // プリミティブ値で初期化するときに便利
// | `map(() => ({}))` | 毎回新しく作る     |    // オブジェクト初期化には基本向いてない

// Fillのまとめ
// 範囲指定の fill(value, start, end) は endは含まれない
// プリミティブはコピー、オブジェクトは参照
// プロパティ書き換え → 共有オブジェクト全部変わる
// インデックス丸ごと代入 → その場所だけ変わる

//////////////////////////////　type of
// typeof は配列を「object（オブジェクト）」として認識します。
// 配列もオブジェクトの一種なので、typeof だけでは配列かどうかはわかりません。

// to check if variable is an array

// 1: use its constructor propery
// newArray.constructor === Array;
let arrayTypeof = [];
console.log(arrayTypeof.constructor === Array); // true
//  constructor はそのオブジェクトを作った「関数（クラス）」を返します。
//  配列の場合は Array が返るので、これで判定できます

// 2: use the object prototype
// Object.prototype.toString.call(newArray) === "[object Array]";
let arrayTypeof2 = [];
console.log(Object.prototype.toString.call(arrayTypeof2) === "[object Array]"); //true
// Object.prototype.toString.call(obj) はオブジェクトの種類を文字列で返します。
// 配列なら [object Array]、関数なら [object Function]、日付なら [object Date] のように返ります。

////////////////////////////// Destructuring
// Destructuring とは 配列の 要素を個別の変数に簡単に取り出す構文 のことです。
// example normal　普通、インデックスの値をとりだすときの書き方
const fruitsf = ["apple", "banana", "orange"];

const first1 = fruitsf[0];
const second2 = fruitsf[1];

console.log("first1 is : ", first1); // "apple"
console.log("second2 is : ", second2); // "banana"

// destructuring way
const fruitsg = ["apple", "banana", "orange"];
const [first3, second3] = fruitsg; // 1行で書ける
console.log("first3 is : ", first3);
console.log("second3 is : ", second3);

// つまり、
// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// 左側の [first, second, ...rest] が 変数に値を割り当てる「パターン」 です。
// 右側の numbers 配列 の 順番通りに要素を取り出して 左の変数に代入しています：
// first	numbers[0]	1
// second	numbers[1]	2
// ...rest	numbers[2〜]	[3, 4, 5]

// 配列の 2番目の要素をスキップ して、1番目と3番目を a と b に代入しています。
// const [a, , b] = colors;

// 配列 nums には 1つしか要素がないので、y は存在しません。デフォルト値 10 が使われます。
// const [x, y = 10] = nums;

// first に最初の要素、others に残りの要素をまとめて配列として代入。
// const [first, ...others] = numbers;

// 配列がネストしている場合も Destructuring 可能です。
// const [a, [b, c]] = nested;

//// ポイントまとめ
// , → スキップ
// = → デフォルト値
// ... → 残りの要素をまとめる
// [ ] → ネストに対応

/////////////////////////////// includes()
// Check if an array contains a CSSMathValue.apply.apply.apply
// use .includes() method
const list5 = [0, 1, 2, 3, 4, 5];

console.log(list5.includes(1)); // true
console.log(list5.includes(6)); // false

/////////////////////////////// The Set object
// Set はユニークな値だけを扱う集合データ構造
// 配列と似ている
// 重複データを自動で排除する
// size で数を確認
// add/has/delete で操作
// 配列と組み合わせてシンプルに重複排除
const mySet = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("apple");
console.log("mySet is", mySet, mySet.size); // [ "apple", "banana" ] size: 2 重複は削除されるため、

//// まとめ
// Set に対して要素があるか確認するときは has() を使う
// プリミティブは値で比較、オブジェクトは参照で比較
