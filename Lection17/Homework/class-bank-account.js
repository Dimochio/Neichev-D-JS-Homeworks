// Створіть клас BankAccount, який буде представляти банківський рахунок.
// Додайте властивість балансу та методи для внесення та зняття грошей.

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(money) {
    console.log(`Зараховано ${money} грн!`);
    this.balance = this.balance + money;
  }

  withdraw(money) {
    if (this.balance - money < 0) {
      console.log(`Спроба зняти ${money}. Помилка! Недостатньо коштів`);
      return;
    }

    console.log(`Знято ${money} грн!`);
    this.balance = this.balance - money;
  }
}

function showTask3() {
  const account1 = new BankAccount(1000);

  console.clear();
  
  console.log(`Balance: ${account1.getBalance()}`); // 1000

  account1.deposit(500);
  console.log(`Balance: ${account1.getBalance()}`); // 1500

  account1.withdraw(200);
  console.log(`Balance: ${account1.getBalance()}`); // 1300

  account1.withdraw(1500);
  console.log(`Balance: ${account1.getBalance()}`); // 1300 "Баланс не змінився через нестачу коштів"
}
