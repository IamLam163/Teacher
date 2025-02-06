### **Key Concepts of Object-Oriented Programming (OOP) in JavaScript**

JavaScript is a prototype-based language but supports **Object-Oriented Programming (OOP)** through **classes** and **prototypes**. The four key concepts of OOP in JavaScript are:

1. **Encapsulation**
2. **Abstraction**
3. **Inheritance**
4. **Polymorphism**

---

## **1. Encapsulation** (Data Hiding)

Encapsulation is about bundling data (properties) and behavior (methods) into a single unit (object). It also restricts direct access to object properties, promoting data security.

### **Example: Using private properties (`#`)**

```javascript
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
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);
account.withdraw(300);

// Trying to access private property
console.log(account.#balance); // ❌ Error: Private field '#balance' must be declared in an enclosing class
```

💡 **Encapsulation prevents direct access to sensitive data, enforcing controlled modifications via methods.**

---

## **2. Abstraction** (Hiding Complexity)

Abstraction simplifies complex logic by exposing only the essential details.

### **Example: Hiding internal implementation details**

```javascript
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  // Abstracting complex logic into a method
  startEngine() {
    console.log("Engine started!");
  }

  drive() {
    this.startEngine(); // Hides the complexity of starting the engine
    console.log(`${this.brand} is moving!`);
  }
}

const myCar = new Car("Toyota");
myCar.drive(); // User doesn't need to know how the engine starts internally
```

💡 **The user interacts with `drive()`, without needing to know the internal mechanics of `startEngine()`.**

---

## **3. Inheritance** (Reusing Code)

Inheritance allows a class (child) to inherit properties and methods from another class (parent), avoiding code duplication.

### **Example: Parent and Child Classes**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark! 🐶");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow! 🐱");
  }
}

const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

myDog.makeSound(); // Bark! 🐶
myCat.makeSound(); // Meow! 🐱
```

💡 **The `Dog` and `Cat` classes inherit the `name` property from `Animal`, but override `makeSound()`.**

---

## **4. Polymorphism** (Multiple Forms)

Polymorphism allows different classes to use the same method in different ways.

### **Example: Method Overriding**

```javascript
class Shape {
  calculateArea() {
    console.log("Area formula not defined!");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(circle.calculateArea()); // 78.54
console.log(rectangle.calculateArea()); // 24
```

💡 **Even though both `Circle` and `Rectangle` have `calculateArea()`, their implementations differ.**

---

## **Summary of OOP Concepts in JavaScript**

| OOP Concept       | Description                                               | Example                                       |
| ----------------- | --------------------------------------------------------- | --------------------------------------------- |
| **Encapsulation** | Hides data using private properties (`#`)                 | `#balance` in `BankAccount`                   |
| **Abstraction**   | Hides complex logic from the user                         | `startEngine()` in `Car`                      |
| **Inheritance**   | Child class inherits properties/methods from parent class | `Dog` extends `Animal`                        |
| **Polymorphism**  | Same method behaves differently in different classes      | `calculateArea()` in `Circle` and `Rectangle` |
