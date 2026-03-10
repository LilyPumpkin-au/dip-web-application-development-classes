// 問題 1：クラスの作成
// 次の条件でクラスを作ってください。
// クラス名は Person
// プロパティは name と age

// sayHello() というメソッドを作り、"こんにちは、私の名前は〇〇です" と表示する

// 例:
// const person1 = new Person("Yuki", 25);
// person1.sayHello(); // "こんにちは、私の名前はmeronです"

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`こんにちは、私の名前は ${this.name} です。`);
  }
}

const person1 = new Person("Meron", 25);
person1.sayHello();
// こんにちは、私の名前は Meron です。

// 問題 2：インスタンスの作成
// 次のクラス Car があるとします。

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
// }

// Car のインスタンスを作って、brand を "Toyota"、year を 2020 にしてください
// 作ったインスタンスを myCar に代入してください

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

const myCar = new Car("Toyota", 2020);
console.log(myCar); // { brand: "Toyota", year: 2020 }

// 問題 3：クラスで計算する
// 次の条件でクラスを作ってください。
// クラス名は Rectangle
// プロパティは width と height
// メソッド getArea() を作り、長方形の面積を返す
// 作ったインスタンスで幅が 5、高さが 3 の長方形の面積をコンソールに出力する

// 例:
// const rect = new Rectangle(5, 3);
// console.log(rect.getArea()); // 15

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea(width, height) {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 3);
console.log(rect.getArea());
// 15

// 問題 4：クラスで情報を更新する
// 次の条件でクラスを作ってください。
// クラス名は BankAccount
// プロパティは owner と balance
// メソッドは2つ作る

// deposit(amount)：口座にお金を入れる（balance を増やす）
// withdraw(amount)：口座からお金を引き出す（balance を減らす、残高が足りなければ「残高不足」と表示する）

// 例:
// const myAccount = new BankAccount("Yuki", 1000);
// myAccount.deposit(500);
// myAccount.withdraw(200);
// console.log(myAccount.balance); // 1300
// myAccount.withdraw(2000); // 残高不足

// 💡ヒント
// メソッド内で this.balance を更新します
// 条件分岐（if）を使って残高チェックをします

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount; // 残高に加算
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("残高不足");
    } else {
      this.balance -= amount; // 残高から引く
    }
  }
}

const myAccount = new BankAccount("Meron", 1000);
myAccount.deposit(500);
console.log(myAccount.balance); // 1500

myAccount.withdraw(200);
console.log(myAccount.balance); // 1300

myAccount.withdraw(2000); // 残高不足
console.log(myAccount.balance); // 1300
