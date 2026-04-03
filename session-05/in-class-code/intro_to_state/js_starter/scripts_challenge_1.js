// Challenge - Stage 1
let addBook = function (book) {
  // If there's no book to do, do nothing
  if (!book || book.length < 1) return;

  // Get the list
  let list = document.querySelector("#list");

  // Create a new list item
  let listItem = document.createElement("li");
  listItem.textContent = book;

  // Append the item to the list
  list.appendChild(listItem);
};

let book = "Harry Potter IV";

addBook(book);

// この3つが必要
// data :状態を保持するオブジェクト
// template :データに応じたHTML文字列を返す関数
// render :テンプレートをDOMに反映する

// Empty
// Typing
// Submission Validation
// Success
// Error

// チャレンジ1〜3はすべて素のVanilla JavaScript**だけで書かれています。Reactは一切使っていません。

// | | 使用技術 | 目的 |
// |---|---|---|
// | チャレンジ1 | Vanilla JS | 手動DOM操作を理解する |
// | チャレンジ2 | Vanilla JS | Stateベースのデータ→テンプレート→レンダリングの流れを理解する |
// | チャレンジ3 | Vanilla JS | コンストラクターパターンで再利用可能なコンポーネントを作る |
