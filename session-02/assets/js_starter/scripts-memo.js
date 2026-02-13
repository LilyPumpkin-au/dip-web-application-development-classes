// Session 2 Memo
// Array
console.log("Scripts-memo.js");

// make an array
const a = [1, 2, 3];
const b = Array(1, "Web Tech", ["a", "b"]);

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
