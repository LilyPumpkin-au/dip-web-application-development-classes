// JavaScriptの世界の分類

// 超シンプルにすると

// プリミティブ
//   number
//   string
//   boolean
//   null
//   undefined
//   symbol
//   bigint

// オブジェクト
//   object
//   array
//   function
//   class instance
//   date
//   map
//   set

// つまり
// クラスのインスタンス = object

// クラス → 設計図
// インスタンス → 設計図から作られた実体
// オブジェクト → JavaScript の値で、プロパティとメソッドを持つもの

////////////////// 問題①：簡単なクラス
// Dog クラスを作ってください。
// 条件
// constructor で name を受け取る
// bark() メソッドを作る
// bark() を実行すると
// Pochi says woof!
// のように表示されるようにする。

// 使用例// const dog1 = new Dog("Pochi");
// dog1.bark();

// 出力
// Pochi says woof!

// class 設計図を作る
class Dog {
  // constructor 初期値を設定する
  constructor(name) {
    this.name = name;
  }

  //method
  bark() {
    console.log(`${this.name} says wood!`);
  }
}

// instance 設計図を使うためのコマを作る(object)
const dog1 = new Dog("Pochi");

// call 設計図のメソッドをコマを使って呼び出す
dog1.bark();

//////////////////////////////////////////////

// 問題②：カウントするクラス

// Counter クラスを作ってください。

// 条件
// constructor で count を 0でスタート
// increment() メソッドを作る
// increment() を呼ぶたびに count を +1 する
// getCount() で現在の値を返す
// 使用例
// const counter = new Counter();
// counter.increment();
// counter.increment();

// console.log(counter.getCount());
// 出力
// 2

// 設計図を作る
class Counter {
  constructor(count) {
    //初期値の設定
    this.count = 0;
  }

  // method １を足す
  increment() {
    // count の状態を変更しているだけだから、returnはいらない
    this.count += 1;
  }

  // method count の値を返す
  getCount() {
    // countの値を取得したいため、returnが必要
    return this.count;
  }
}

// コマを作る（インスタンス、オブジェクト）
const counter = new Counter();
counter.increment();
counter.increment();

console.log(counter.getCount());

//////////////////////////////////////////////

// 問題1：銀行口座クラスの拡張
// BankAccount クラスがあります。このクラスを拡張して、以下の要件を満たす SavingsAccount クラスを作ってください。

// 条件
// BankAccount クラスには owner と balance プロパティがある。
// SavingsAccount クラスでは、利息 interestRate (%) を追加できるようにする。
// addInterest() メソッドを作り、現在の残高に利息を追加する（例：balance = balance + balance * interestRate / 100）。
// deposit(amount) と withdraw(amount) メソッドも正しく動くようにする。

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amout) {
    this.balance -= amout;
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner, balance, interestRate) {
    super(owner, balance);
    this.interestRate = interestRate;
  }

  addInterest() {
    this.balance = this.balance + (this.balance * this.interestRate) / 100;
  }
}

const myAccount = new SavingsAccount("Meron", 1000, 5);
myAccount.addInterest();
console.log(myAccount.balance);
