// Challenge 3 Book constructor
function Book(title, author) {
  this.title = title;
  this.author = author;
  // Method to display book information
  // displayInfo is a custom Method
  // this.〇〇 = function()　→　カスタムメソッド
  this.displayInfo = function () {
    // display on console log
    console.log(`${this.title}, author: ${this.author}`);
    // display on the html
    const list = document.getElementById("app");
    // adding list
    list.innerHTML += `<li>${this.title}, author: ${this.author}</li>`;
  };
}

// Creating instances using the Book constructor
let book1 = new Book("Harry Potter 1", "J.K. Rowling");
let book2 = new Book("Harry Potter 2", "J.K. Rowling");
let book3 = new Book("Harry Potter 3", "J.K. Rowling");

// Displaying book information
book1.displayInfo();
book2.displayInfo();
book3.displayInfo();

//////////////////////
// 配列に入れて、forEachで一括処理
// const books = [
//   new Book("Harry Potter 1", "J.K. Rowling"),
//   new Book("Harry Potter 2", "J.K. Rowling"),
//   new Book("Harry Potter 3", "J.K. Rowling"),
// ];

// 全部まとめて表示
// books.forEach((book) => book.displayInfo());
// 本が何冊増えても、この1行だけでOK
