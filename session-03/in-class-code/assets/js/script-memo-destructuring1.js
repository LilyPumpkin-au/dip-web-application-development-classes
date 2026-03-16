// //////////////// Destructuring /////////////////////////
// https://www.w3schools.com/js/js_destructuring.asp

// // JavaScript の Destructuring（分割代入） は、配列やオブジェクトの中から値を 簡単に取り出して変数に代入できる文法 です。

// 1. 配列の分割代入
// const numbers = [10, 20, 30];

// // 通常の取り出し
// const first = numbers[0];
// const second = numbers[1];

// // 分割代入ならこう書ける
// const [a, b, c] = numbers;

// console.log(a, b, c); // 10 20 30

// 左側の [] に変数を書くだけで、順番に値を取り出せます。

// 必要な要素だけ取り出すこともできます。

// const [x, , z] = numbers; // 2番目をスキップ
// console.log(x, z); // 10 30
// 2. オブジェクトの分割代入
// const person = { name: "Lily", age: 25 };

// // 通常の取り出し
// const name1 = person.name;
// const age1 = person.age;

// // 分割代入ならこう書ける
// const { name, age } = person;

// console.log(name, age); // Lily 25

// 左側の {} にキー名を書くだけで、対応する値が変数に入ります。

// 変数名を変えたいときも書けます：

// const { name: userName, age: userAge } = person;
// console.log(userName, userAge); // Lily 25
