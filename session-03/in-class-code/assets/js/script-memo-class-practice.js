class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  bark() {
    console.log(`${this.name} says woof! `);
  }
}

const dog1 = new Dog("Pochi", 3);
dog1.bark();
// console.log(dog1.brark(););

/////////////////////////////////////

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  showBalance() {
    console.log(`Balance : ${this.balance}`);
  }
}

const account = new BankAccount("meron", 5);

account.showBalance();
account.deposit(500);
account.showBalance();
account.withdraw(2000);
account.showBalance();
