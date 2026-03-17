// * 1. SyntaxError（文法エラー）

// 原因: コードの文法が間違っているとき
// 例:

// const a = 5 // セミコロンを忘れた場合でも大丈夫なことが多いが、括弧や{}の不整合はエラー
// if(a == 5 { console.log(a); } // 括弧の閉じ忘れ

// 対処:

// * 括弧 `()`, 波括弧 `{}` が正しく閉じているか確認
// * 文末のコロン `;` やカンマ `,` の有無を確認
// * コードエディタの自動整形を使う（VSCodeのFormat機能など）

//  2. ReferenceError（参照エラー）

// 原因: 定義していない変数や関数を呼び出したとき
// 例:

// console.log(b); // bは未定義

// 対処:

// * 変数や関数がスコープ内に存在するか確認
// * `let`や`const`で宣言漏れがないか確認
// * モジュール間でimport/exportの名前が一致しているか確認

//  3. TypeError（型エラー）

// 原因: 予期しない型に対して操作したとき
// 例:

// null.f(); // nullにはメソッドfがない
// const num = 5;
// num.push(1); // 数値にはpushできない

// 対処:

// * 変数の型を`typeof`で確認
// * 配列やオブジェクトかを確認してから操作
// * optional chaining `?.` を使って安全にアクセス

//  4. RangeError（範囲エラー）

// 原因: 数値や配列の範囲を超えた操作をしたとき
// 例:

// const arr = [1,2];
// arr.length = -1; // 長さに負の値は不可

// 対処:

// * 配列や数値の範囲を確認
// * ループや再帰の条件を見直す

//  5. URIError（URIエラー）

// 原因: `encodeURI`や`decodeURI`で不正な文字列を扱ったとき
// 例:

// decodeURIComponent('%'); // 不正なエンコード

// 対処:

// * 文字列が正しいURI形式か確認
// * encode/decodeのペアが一致しているか確認

//  6. EvalError（eval関係のエラー）

// 原因: `eval()`の誤用
// 例:

// eval('console.log("hello)'); // 文法エラーを含む

// 対処:

// * 基本的にevalは避ける
// * 必要なら文字列の内容を検証

//  7. InternalError（内部エラー）

// 原因: JavaScriptエンジン内部の処理で異常が起きたとき（稀）
// 例: 無限再帰や極端に大きい配列操作

// function f(){ f(); }
// f(); // Maximum call stack size exceeded

// 対処:

// * 無限ループ・再帰を見直す
// * 配列や文字列のサイズを制限する

//  8. Common Runtime Errors（よくある実行時エラー）

// | エラー                                     | 原因                              | 対処法                               |
// |  | - |  |
// | `Cannot read property 'x' of undefined` | オブジェクトが`undefined`なのにプロパティにアクセス | optional chaining `obj?.x`、存在チェック |
// | `Cannot set property 'x' of null`       | nullに対して値を設定                    | nullチェック、DOM要素が存在するか確認            |
// | `is not a function`                     | 変数に関数以外が入っている、または未定義            | 型チェック、import/export名確認            |
// | `Unexpected token`                      | 文法ミス（括弧や文字列閉じ忘れなど）              | 文法確認、エディタでハイライトを見る                |

//  9. Tips for Debugging

// 1. ブラウザのコンソールを見る

//    * Chromeなら`F12` → Consoleタブ
// 2. `console.log()`を活用

//    * 変数や処理の流れを確認
// 3. 小さくテストする

//    * 大きいコードは問題箇所を切り出して試す
// 4. エディタのLint機能を使う

//    * VSCodeならESLintで文法・型を早めに警告
// 5. Stack OverflowやMDN参照

//    * エラー文で検索すると原因例が多く出る
