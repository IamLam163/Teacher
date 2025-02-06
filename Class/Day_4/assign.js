class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = []; // Array of objects { amount, description }
    this.expenses = []; // Array of objects { amount, description }
  }

  addIncome(amount, description) {
    this.incomes.push({ amount, description });
  }

  addExpense(amount, description) {
    this.expenses.push({ amount, description });
  }

  totalIncome() {
    return this.incomes.reduce((sum, income) => sum + income.amount, 0);
  }

  totalExpense() {
    return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

  accountInfo() {
    return `Account Holder: ${this.firstname} ${
      this.lastname
    }\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nBalance: ${this.accountBalance()}`;
  }
}

// Example Usage:
const person = new PersonAccount("John", "Doe");
person.addIncome(5000, "Salary");
person.addIncome(200, "Freelance work");
person.addExpense(1500, "Rent");
person.addExpense(200, "Groceries");

console.log(person.accountInfo());
