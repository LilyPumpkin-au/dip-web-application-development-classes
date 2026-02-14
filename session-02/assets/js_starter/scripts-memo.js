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

// Copying an array to a new variable
// Use the spread operator [...array]
const fruits = ["banana", "apple", "pear"]; // original array
const morefruits = [...fruits]; // copied original arrays

// Output
console.log(`fruits Array is :  ${fruits}`); // バッククォート` , ${variable}
console.log("morefruits Array is :" + morefruits); // クオーテーションマーク ""　+ variable

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

// slice()
// Remove specific item, and Create new array
let slicedArray = fruits.slice(1, 5); // とりだしたアイテムだけで、新しい配列が作られる
console.log(`slice() sliced array:  ${slicedArray}`); // apple,pear,mango,grape
console.log(`slice() original array :  ${fruits}`);

// Add element without Mutaion
// To add new element at teh front
const morefruits2 = ["orange", ...fruits]; // make new array, add "orange" at the start, rest is same as "fruits" array
console.log(`add new element morefruits2: ${morefruits2}`);

// To add new element at the end
const morefruits3 = [...fruits, "orange"]; // make new array, add "orange" at the end, rest is same as "fruits" array
console.log(`add new element morefruits3: ${morefruits3}`);
