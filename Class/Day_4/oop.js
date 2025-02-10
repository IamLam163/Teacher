class BankAccount {
  #balance; // Private property

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance!");
    } else {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}. Remaining Balance: ${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);
account.withdraw(300);
account.getBalance();
// Trying to access private property
//console.log(account.#balance); // ❌ Error: Private field '#balance' must be declared in an enclosing class
