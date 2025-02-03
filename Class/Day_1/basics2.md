# **JavaScript Notes – Operators & Control Flow**  

---

## **1. Operators in JavaScript**  
Operators allow you to perform different operations on variables and values.  

### **Types of Operators:**  
1️⃣ **Arithmetic Operators** (`+`, `-`, `*`, `/`, `%`, `**`) – Used for mathematical calculations.  
2️⃣ **Comparison Operators** (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`) – Used to compare values.  
3️⃣ **Logical Operators** (`&&`, `||`, `!`) – Used for logical operations.  
4️⃣ **Assignment Operators** (`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`) – Used to assign values to variables.  
5️⃣ **Ternary Operator** (`condition ? value_if_true : value_if_false`) – A shorthand for `if-else`.  

### **Examples**  

🔹 **Easy:** Arithmetic operations  
```js
let a = 10;
let b = 5;
console.log(a + b);  // 15
console.log(a * b);  // 50
console.log(a % b);  // 0 (remainder)
```  

🔹 **Medium:** Comparison and logical operators  
```js
let x = 10, y = "10";
console.log(x == y);   // true (loose comparison)
console.log(x === y);  // false (strict comparison)
console.log(x > 5 && y == 10);  // true (both conditions are true)
```  

🔹 **Hard:** Using the ternary operator  
```js
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"
```  

---

## **2. Conditional Statements**  
Conditional statements allow code execution based on conditions.  

### **Types of Conditionals:**  
- **if statement** – Runs a block of code if a condition is `true`.  
- **if-else statement** – Runs an alternative block if the condition is `false`.  
- **else if statement** – Adds multiple conditions.  
- **switch statement** – Used for handling multiple possible values of a variable.  

### **Examples**  

🔹 **Easy:** Basic `if` condition  
```js
let temperature = 25;
if (temperature > 20) {
    console.log("It's warm outside.");
}
```  

🔹 **Medium:** `if-else` statement  
```js
let num = 7;
if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
```  

🔹 **Hard:** `switch` statement  
```js
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the workweek.");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Just another day.");
}
```  

---

## **3. Loops in JavaScript**  
Loops allow you to execute a block of code multiple times.  

### **Types of Loops:**  
1️⃣ **for loop** – Runs a block a specific number of times.  
2️⃣ **while loop** – Runs a block while a condition is `true`.  
3️⃣ **do...while loop** – Runs a block at least once, then continues while the condition is `true`.  

### **Examples**  

🔹 **Easy:** `for` loop  
```js
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
```  

🔹 **Medium:** `while` loop  
```js
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}
```  

🔹 **Hard:** `do...while` loop  
```js
let number = 5;
do {
    console.log("Number is:", number);
    number--;
} while (number > 0);
```  

---

