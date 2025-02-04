# **JavaScript Functions & Scope **  

---

## **1. Function Declarations & Expressions**  

### **Function Declarations**  
A function declaration defines a function with the `function` keyword. It can be called **before** it is defined because of **hoisting**.  

🔹 **Example:**  
```js
sayHello(); // ✅ Works because of hoisting

function sayHello() {
    console.log("Hello, World!");
}
```
🔹 **Key Features:**  
- Hoisted (can be called before declaration).  
- Creates a named function.  

---

### **Function Expressions**  
A function expression assigns a function to a variable. It is **not hoisted**, so it must be defined before calling.  

🔹 **Example:**  
```js
// sayHi(); ❌ Error: Cannot access before initialization

const sayHi = function() {
    console.log("Hi there!");
};

sayHi(); // ✅ Works after definition
```
🔹 **Key Features:**  
- Not hoisted.  
- Can be **anonymous** (no function name).  
- Can be used as a callback.  

---

## **2. Arrow Functions (`=>`)**  
Arrow functions are a **shorter way** to write function expressions. They don’t have their own `this` context.  

### **Syntax:**  
```js
const functionName = (parameters) => expression;
```

### **Examples:**  

🔹 **Single-line arrow function (implicit return)**  
```js
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
```
(Here, `{}` and `return` are omitted because it’s a single-line function.)

🔹 **Multi-line arrow function**  
```js
const greet = (name) => {
    console.log("Hello, " + name);
};
greet("Alice");
```

🔹 **Arrow function with a single parameter (No parentheses needed)**  
```js
const square = x => x * x;
console.log(square(4)); // Output: 16
```

🔹 **Arrow function with no parameters**  
```js
const sayHello = () => console.log("Hello!");
sayHello();
```

### **Key Differences from Regular Functions:**  
- **No `this` binding** (inherits `this` from surrounding scope).  
- **Cannot use `arguments` object**.  
- **Always an expression** (not hoisted).  

---

## **3. Parameters & Return Values**  

### **Function Parameters**  
A function can take inputs (parameters) and use them inside the function.  

🔹 **Example:**  
```js
function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5)); // Output: 20
```

### **Default Parameters**  
If a parameter isn’t passed, it uses a default value.  

🔹 **Example:**  
```js
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet(); // Output: Hello, Guest
```

### **Returning Values**  
Functions can return values using `return`.  

🔹 **Example:**  
```js
function subtract(x, y) {
    return x - y;
}

let result = subtract(10, 3);
console.log(result); // Output: 7
```
If `return` is omitted, the function returns `undefined`.  

---

## **4. Scope (Global vs. Local, `var`, `let`, `const`)**  

### **What is Scope?**  
Scope defines where variables are **accessible** in your code.  

### **Types of Scope:**  

#### **1️⃣ Global Scope** (Available anywhere)  
```js
let globalVar = "I'm global!";

function example() {
    console.log(globalVar); // ✅ Accessible
}

example();
console.log(globalVar); // ✅ Accessible
```

#### **2️⃣ Local Scope** (Exists only inside a function)  
```js
function example() {
    let localVar = "I'm local!";
    console.log(localVar); // ✅ Accessible inside function
}

example();
console.log(localVar); // ❌ Error: localVar is not defined
```

#### **3️⃣ Block Scope (`let` & `const`)**  
- `let` & `const` are **block-scoped** (only exist inside `{}`).  
- `var` is **function-scoped** (ignores `{}` unless inside a function).  

🔹 **Example:**  
```js
{
    let blockLet = "Inside block";
    const blockConst = "Also inside block";
    var blockVar = "Still accessible";
}

// console.log(blockLet); ❌ Error
// console.log(blockConst); ❌ Error
console.log(blockVar); // ✅ "Still accessible"
```

### **Summary of `var`, `let`, and `const` Scope Rules:**  

| Keyword  | Scope          | Reassignable? | Hoisted? |
|----------|---------------|--------------|----------|
| `var`    | Function-scoped | ✅ Yes | ✅ Yes (but undefined) |
| `let`    | Block-scoped   | ✅ Yes | ❌ No |
| `const`  | Block-scoped   | ❌ No | ❌ No |

---

## **5. Closures**  

### **What is a Closure?**  
A closure is a function that **remembers** the variables from its **outer scope**, even after the outer function has finished executing.  

🔹 **Example: Closure in Action**  
```js
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World"); // Output: Outer: Hello, Inner: World
```
- The **inner function (`innerFunction`) remembers `outerVariable`** even after `outerFunction` is done.  

### **Practical Use Cases of Closures**  

#### **1️⃣ Data Privacy (Encapsulation)**
Closures can create **private variables** inside functions.  

```js
function counter() {
    let count = 0; // Private variable

    return {
        increment: () => count++,
        decrement: () => count--,
        getCount: () => count
    };
}

const myCounter = counter();
myCounter.increment();
console.log(myCounter.getCount()); // Output: 1
```
- `count` **cannot be accessed directly**, making it private.  

#### **2️⃣ Function Factories**  
Closures can create **functions with pre-set behaviors**.  

```js
function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```

---

## **Conclusion**  
🔹 **Function declarations** are hoisted, while **function expressions** are not.  
🔹 **Arrow functions** provide a concise way to write functions but do not have their own `this`.  
🔹 Functions can take **parameters** and **return values**.  
🔹 **Scope** defines where variables can be accessed (`global`, `local`, `block`).  
🔹 **Closures** allow functions to remember variables from their outer scope, which is useful for **data privacy and function factories**.  

