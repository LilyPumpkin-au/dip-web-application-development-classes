//////////////////////////// Modularised Code = コードを小さな部品（モジュール）に分けること
// モジュールとは：1つの役割だけを持つ独立したコードのかたまり
// Maintainability（保守性）
// Reusability（再利用性）
// Organisation（整理） を高める

// Scalability	拡張できる	機能追加が安全
// Consistent UX	UIが統一	使いやすい
// Collaboration	チーム作業しやすい	開発効率UP

// ES6 からJSに導入されたものだから、それ以前のふるいブラウザ（だいたい2017年より前）では動かない。エラーが出る。

// Example of a reusable button composent
function createButton(label, onClick) {
  //「再利用可能なUIコンポーネント」
  const button = document.createElement("button");
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

// Example of a modularised DOM update function
// DOM更新処理を1つの関数にまとめている
export function updateDOM(element, content) {
  element.innerHTML = content;
}

///////////// Creating and Exporting Modules
// Use the export keyword

///// Named Exports（名前付きエクスポート）
// 複数の値を export できる
// import するときは { }（波かっこ）を使う
// 名前は必ず一致させる必要がある
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

////// Named Exports の import
// ルール
// { } を使う
// 必要なものだけ import できる
// 名前は一致させる
import { add } from "./math.js"; //特定の値だけ import できる, （subtract は読み込まれていない）
console.log(add(2, 3));

///// Default Export（デフォルトエクスポート）
// 1つの値だけ
// importするとき { } は使わない
// 名前は自由につけられる
export default function greet(name) {
  return `Hello, ${name}`;
}

///// Default Export の import
// ルール
// { } は使わない
// 名前は自由につけられる
import sayHello from "./greet.js";
console.log(sayHello("Yukie"));

////////////////// Named Export | Default Export 比較
// |         | Named Export | Default Export |
// | ------- | ------------ | -------------- |
// | 複数OK？   |  できる         |  1つだけ         |
// | import時 | `{ }` 必要        | `{ }` 不要       |
// | 名前変更    | `as` が必要     | 自由に変更可         |
// 名前一致？	  | 必須	           | 自由
// 複数可？	    | 可              | 1つ

///// Combining Imports（両方使う場合）
// もし1つのファイルに default と named の両方がある場合
// default が 最初
// named が { } の中

// Export
export const a = 10;
export const b = 20;

export default function greet() {
  console.log("Hello");
}

// Import
import greet, { a, b } from "./file.js";


///////////////////////// Browser
///// FireFox
// For Web Page JavaScript Modules
// If you are a web developer and want to inspect the JavaScript modules used by a specific website:

//     Open the Firefox Developer Tools by pressing Ctrl + Shift + I (Windows/Linux) or Cmd + Opt + I (macOS).
//     Go to the Network tab, reload the page, and filter by "JS" to see the module files being loaded.

///// Chrome
// デベロッパーツール > Sources パネル > Page タブでファイルを探す
// 読み込まれているフォルダ構造が表示されるので、jsやmoduleなどが格納されているフォルダを展開し、目的のファイルをクリック。 

// モジュールファイルを効率的に探すコツ
// (Ctrl+P / Cmd+P) Sourcesパネルにフォーカスがある状態で、Windows: Ctrl + P、Mac: Cmd + P を押すと、ファイル名検索ダイアログが開きます。
// 探しているファイル名の一部を入力して選択するとすぐに開けます。

// 全ファイルから検索 (Ctrl+Shift+F / Cmd+Option+F):
// Ctrl + Shift + F (Macは Cmd + Option + F) を押すと、全読み込みファイルからテキスト検索ができます。

// ソースマップ (Source Maps):
// WebpackやViteなどでビルドされたプロジェクトの場合、ソースマップが有効なら、元のTypeScriptや分割されたモジュール単位のファイル構造で見ることができます。 

// 読み込まれた全ファイルを確認する
// Network パネル: 「Network」タブを開き、フィルターで「JS」を選択すると、モジュールを含め読み込まれたすべてのJSファイルを確認できます。 
