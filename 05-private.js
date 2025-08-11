// private is using #

class BankAccount {
  #balance = 0; //private
  constructor(initBalance) {
    if (initBalance < 0) {
      throw new Error("Balance cannot be negative");
    }
    this.#balance = initBalance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}, balance is now ${this.#balance}`);
    } else {
      console.log("Amount must be positive");
    }
  }
  withdraw(amount) {
    if (amount > 0) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}, balance is now ${this.#balance}`);
    } else {
      console.log("Amount must be positive");
    }
  }

  getAccountBalance() {
    return this.#balance;
  }
}
const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getAccountBalance());
myAccount.withdraw(200);
console.log(myAccount.getAccountBalance());
