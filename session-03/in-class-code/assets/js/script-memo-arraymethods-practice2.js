///////////// Array ////////////////
// https://www.w3schools.com/jsref/jsref_obj_array.asp

// 配列の中に「cat」が含まれているかどうかを includes() で調べなさい。
// 例：['dog', 'cat', 'bird']
const animals = ["dog", "cat", "bird"];
const confirmCat = animals.includes("cat");
console.log(confirmCat); //true

// 配列 [1, 2, 3, 4] の最後の要素を pop() を使って取り出し、その値を表示するコードを書きなさい。
const numbers = [1, 2, 3, 4];
const lastNumbers = numbers.pop();
console.log(lastNumbers); //4
console.log(numbers); // [1, 2, 3]

// 配列 [10, 20, 30] に push() で 40 を追加し、完成した配列を表示しなさい。
const numbers2 = [10, 20, 30];
const numbers3 = numbers2.push(40);
console.log(numbers2); //Array(4) [ 10, 20, 30, 40 ]
console.log(numbers3); //4
// push() は 配列の末尾に値を追加する, 同時に 新しい配列の長さを返す
// 例
// const result = array.push(value);
// array → 値が追加される（元の配列が変わる）
// result → 配列の新しい長さが返る

// 4: 配列 [5, 10, 15, 20] から、10 より大きい要素だけを filter() で新しい配列にしなさい。
const numbers4 = [5, 10, 15, 20];
const filterNumbers4 = numbers4.filter((num) => num >= 10);
console.log(filterNumbers4); //[ 10, 15, 20 ]

// 配列 ['apple', 'banana'] を join() を使って「apple & banana」という文字列に変換しなさい。
const fruits = ["apple", "banana"];
const joinFruits = fruits.join(" & ");
console.log(joinFruits); // apple & banana

// 配列 [1, 2, 3, 4, 5] を map() を使い、各要素を 2 倍した新しい配列にしなさい。

// 7 配列 [1, 2, 3, 4, 5] の最初から 3 つだけを取り出して新しい配列にするコードを slice() で書きなさい。
const numbers7 = [1, 2, 3, 4, 5];
const first3Numbers = numbers7.slice(0, 3);
console.log(first3Numbers); //  [ 1, 2, 3 ]

// 8 配列 ['a', 'b', 'c', 'd'] から、インデックス 1 の位置に 'x' を追加し、 'b' を削除して新しい配列を作りなさい（splice() を使用）。
const alphabet = ["a", "b", "c", "d"];
// array.splice(index, count, item1, ....., itemX)
// At position 1, remove 1 item, add "x"
const alphabet2 = alphabet.splice(1, 1, "x");
console.log(alphabet); //[ "a", "x", "c", "d" ]
console.log(alphabet2); //[ "b" ]

// 9 文字列 "hello" を Array.from() を使って 1 文字ずつの配列に変換しなさい。
const word = "hello";
const characters = Array.from(word); // Array.from(object)
console.log(word); //hello
console.log(characters); //[ "h", "e", "l", "l", "o" ]

//10  配列 [1, 2, [3, 4], [5, [6, 7]]] を 1 階層だけ平坦化（ネストを一段減らす）する flat() のコードを書きなさい。
const numbers10 = [1, 2, [3, 4], [5, [6, 7]]];
const flatNum10 = numbers10.flat();
console.log(flatNum10);

//11  次の配列 [1, 2, 3] に対して、各要素を一度 map() で取り出して [value, value * 2] という配列にし、
// それを一段だけ平坦化する flatMap() のコードを書きなさい。
const numbers11 = [1, 2, 3];
const doubleNum11 = numbers11.map((num) => [num, num * 2]);
console.log(doubleNum11);
// 0: Array [ 1, 2 ]
// 1: Array [ 2, 4 ]
// 2: Array [ 3, 6 ]
const doubleNum11Flat = doubleNum11.flat();
console.log(doubleNum11Flat);
//[ 1, 2, 2, 4, 3, 6 ]

//12  配列 [10, 2, 30, 4] を昇順で並べ替えるコードを sort() を使って書きなさい（数値として昇順に）。
// 要注意ポイント
// sort() は デフォルトでは文字列としてソート されます。
// 数値として昇順にしたい場合は 比較関数を渡す必要 がある
// https://www.w3schools.com/js/js_array_sort.asp
const numbers12 = [10, 2, 30, 4];
const sortNum12 = numbers12.sort((a, b) => a - b);
console.log(numbers12); // [ 2, 4, 10, 30 ]
console.log(sortNum12); // [ 2, 4, 10, 30 ]

// 配列の内容を逆順にする reverse() は破壊的（元の配列を書き換える）かどうか説明しなさい。

// [1, 2] == [1, 2] のような比較がなぜ false になるか説明しなさい（配列の比較について）。

// 複数のメソッドを使って、「配列から偶数だけ取り出し、それらを 3 倍して文字列に変換する」処理を 1 行で書きなさい（map + filter などの組み合わせ）。
const numbers15 = [
  10, 3, 593, 57, 35, 9, 457, 437, 951, 45, 367, 55, 34, 54, 32, 222,
];
const evenTripled = numbers15
  .filter((num) => num % 2 === 0) //偶数だけ取り出し
  .map((num) => num * 3) //3 倍して
  .toString(); //文字列に変換
console.log(evenTripled);
