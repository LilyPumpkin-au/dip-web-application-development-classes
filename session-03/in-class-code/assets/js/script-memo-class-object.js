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

///////////////////////////////////

// 問題①（ウォームアップ）
// Counterクラスを作ってください。
// 条件
// constructor
// count を 0 で初期化
// メソッド
// increment() → count を 1増やす
// decrement() → count を 1減らす
// getCount() → 現在のcountを返す
class Counter {
  constructor(count = 0) {
    this.count = count;
  }

  increment(amount) {
    this.count += amount;
  }

  decrement(amount) {
    this.count -= amount;
  }

  getCount() {
    return this.count;
  }
}

const counter = new Counter();

counter.increment(100);
counter.increment(100);
counter.decrement(50);

console.log(counter.getCount());

//////////////////////////////////

// 問題②（少しレベルアップ）
// Car クラスを作ってください。
// 条件
// constructor
// 3つのプロパティ
// brand
// model
// speed
// speed は 最初 0
// メソッド
// accelerate(amount)
// → speed を amount だけ増やす
// brake(amount)
// → speed を amount だけ減らす
// （ただし speedは0未満にならない）
// getSpeed()
// → 現在の speed を返す

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
  }

  accelerate(amount) {
    this.speed += amount;
  }

  brake(amount) {
    if (this.speed - amount >= 0) {
      this.speed -= amount;
    } else {
      this.speed = 0;
    }
  }

  getSpeed() {
    return this.speed;
  }
}

const speed1 = new Car("Toyota", "Yaris");
speed1.accelerate(20);
speed1.accelerate(40);
speed1.brake(30);

console.log(speed1.getSpeed());

speed1.brake(120);
console.log(speed1.getSpeed());

///////////////////////////////////

// 問題③（実務レベル）
// BankAccount + 継承

// 作るクラス
// BankAccount
// SavingsAccount

// 機能
// deposit()
// withdraw()
// addInterest()

class BankAccount2 {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    // this.balance -= amount;
    // Math.max(a, b) は a と b のどちらか大きい方を返す関数
    // もし残高が 100 で、withdraw(50) → 100 - 50 = 50 OK
    // もし残高が 100 で、withdraw(150) → 100 - 150 = -50  NG マイナスになる
    this.balance = Math.max(0, this.balance - amount);
  }

  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount2 {
  constructor(owner, balance, interestRate) {
    super(owner, balance); // 親クラスに渡す引数
    this.interestRate = interestRate; // 初期化
  }

  addInterest() {
    this.balance += this.balance * this.interestRate;
  }
}

const myAccount2 = new SavingsAccount("Lily", 1000, 0.05);

myAccount2.deposit(500);
myAccount2.withdraw(200);
myAccount2.addInterest();

console.log(myAccount2.getBalance());

// super(...) は派生クラスの constructor で 最初に呼ぶ
// this は super の後でしか使えない
// 初期化したい値は this.プロパティ = 引数 でセットする
// 引数不要ならメソッドに書かない
