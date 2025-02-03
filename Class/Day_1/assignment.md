# **JavaScript Assignments**  

---

## **1. Variables (`let`, `const`, `var`)**  

### **Assignment 1: Variable Declaration & Scope**  
📌 **Task:**  
- Declare a variable using `var`, `let`, and `const`.  
- Try reassigning each variable and note what happens.  
- Create a function that demonstrates the scope of `var`, `let`, and `const`.  

📝 **Example Output:**  
```js
console.log(x);  // Should result in an error if x is let or const
console.log(y);  // Should print the assigned value
```

---

## **2. Data Types (Strings, Numbers, Booleans, Undefined, Null, Symbols)**  

### **Assignment 2: Working with Data Types**  
📌 **Task:**  
- Declare variables of different data types (`string`, `number`, `boolean`, `undefined`, `null`, `symbol`).  
- Perform operations on strings (concatenation, length check, case conversion).  
- Perform arithmetic operations on numbers.  
- Compare `undefined` vs. `null`.  
- Create a `Symbol` and compare it with another Symbol.  

📝 **Example Output:**  
```js
console.log(typeof "Hello");  // Output: string
console.log(5 + "10");        // Output: 510 (type coercion)
console.log(null == undefined);  // Output: true
console.log(Symbol("id") === Symbol("id"));  // Output: false
```

---

## **3. Operators (Arithmetic, Comparison, Logical, Assignment, Ternary)**  

### **Assignment 3: Operators Practice**  
📌 **Task:**  
- Perform basic arithmetic operations.  
- Compare two values using `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`.  
- Use logical operators (`&&`, `||`, `!`) in an expression.  
- Use the ternary operator to assign a value based on a condition.  

📝 **Example Output:**  
```js
console.log(10 + 5);  // Output: 15
console.log(5 === "5");  // Output: false
console.log(true && false);  // Output: false
console.log(20 > 15 ? "Greater" : "Smaller");  // Output: Greater
```

---

## **4. Conditional Statements (if, else if, else, switch)**  

### **Assignment 4: Build a Simple Grading System**  
📌 **Task:**  
- Write a program that takes a student's score and assigns a grade using `if-else`.  
- Modify the program to use a `switch` statement instead.  

📝 **Example Output:**  
```js
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
```

---

## **5. Loops (for, while, do...while)**  

### **Assignment 5: Loop Challenges**  
📌 **Task:**  
- Print numbers from `1` to `10` using a `for` loop.  
- Use a `while` loop to print even numbers from `1` to `20`.  
- Use a `do...while` loop to prompt the user for input until they enter `"exit"`.  

📝 **Example Output:**  
```js
for (let i = 1; i <= 10; i++) {
    console.log(i);  // Output: 1, 2, 3, ..., 10
}

let num = 2;
while (num <= 20) {
    console.log(num);  // Output: 2, 4, 6, ..., 20
    num += 2;
}
```


