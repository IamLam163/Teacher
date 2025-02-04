# **Day 4: Arrays & Objects in JavaScript**  

JavaScript provides powerful ways to work with **arrays** and **objects**, which are fundamental data structures in the language. Let's break down each topic in detail.

---

## **1️⃣ Creating & Modifying Arrays**  

An **array** is a collection of values stored in a single variable. JavaScript arrays are **zero-indexed** (the first element has an index of `0`).  

### **🔹 Creating an Array**  
```js
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]
```

### **🔹 Accessing Array Elements**  
```js
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Cherry"
```

### **🔹 Modifying an Array**  
```js
fruits[1] = "Blueberry"; // Modifies index 1
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]
```

### **🔹 Adding & Removing Elements**  
| Method | Description | Example |
|---------|------------|---------|
| `push()` | Adds an element to the end | `fruits.push("Mango");` |
| `pop()` | Removes the last element | `fruits.pop();` |
| `unshift()` | Adds an element to the beginning | `fruits.unshift("Grapes");` |
| `shift()` | Removes the first element | `fruits.shift();` |

```js
fruits.push("Mango");  
console.log(fruits); // ["Apple", "Blueberry", "Cherry", "Mango"]

fruits.pop();  
console.log(fruits); // ["Apple", "Blueberry", "Cherry"]
```

---

## **2️⃣ Array Methods (`map`, `filter`, `reduce`, `forEach`, `find`)**  

JavaScript provides **higher-order functions** to work with arrays efficiently.

### **🔹 `map()` – Transform Each Element**  
Creates a **new array** by applying a function to each element.  

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

---

### **🔹 `filter()` – Select Elements Based on Condition**  
Creates a **new array** with elements that pass a condition.

```js
const numbers = [10, 15, 20, 25];
const greaterThan15 = numbers.filter(num => num > 15);
console.log(greaterThan15); // Output: [20, 25]
```

---

### **🔹 `reduce()` – Reduce Array to a Single Value**  
Applies a function **to accumulate values** into a single result.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10
```

---

### **🔹 `forEach()` – Loop Through Each Element (No Return Value)**  
Executes a function for **each element** but does not return a new array.

```js
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));
// Output:
// Apple
// Banana
// Cherry
```

---

### **🔹 `find()` – Find the First Matching Element**  
Returns **the first element** that satisfies a condition.

```js
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found); // Output: 12
```

---

## **3️⃣ Objects & Object Manipulation**  

An **object** is a collection of **key-value pairs**. Objects are used to store related data.

### **🔹 Creating an Object**  
```js
const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
```

### **🔹 Accessing Object Properties**  
```js
console.log(person.name); // "Alice"
console.log(person["age"]); // 25
```

### **🔹 Modifying an Object**  
```js
person.age = 26; // Modifying an existing property
person.country = "USA"; // Adding a new property

console.log(person);
// Output: { name: "Alice", age: 26, city: "New York", country: "USA" }
```

### **🔹 Deleting a Property**  
```js
delete person.city;
console.log(person); 
// Output: { name: "Alice", age: 26, country: "USA" }
```

---

## **4️⃣ Object Methods (`Object.keys()`, `Object.values()`, `Object.entries()`)**  

JavaScript provides **built-in methods** to work with objects.

### **🔹 `Object.keys()` – Get an Array of Keys**  
```js
const person = { name: "Bob", age: 30, city: "London" };
console.log(Object.keys(person)); 
// Output: ["name", "age", "city"]
```

---

### **🔹 `Object.values()` – Get an Array of Values**  
```js
console.log(Object.values(person)); 
// Output: ["Bob", 30, "London"]
```

---

### **🔹 `Object.entries()` – Get an Array of Key-Value Pairs**  
```js
console.log(Object.entries(person));
/* Output:
[
    ["name", "Bob"],
    ["age", 30],
    ["city", "London"]
]
*/
```

---

## **📌 Summary Table of Methods**  

| **Method** | **Type** | **Description** | **Example** |
|------------|----------|----------------|-------------|
| `push()` | Array | Adds element to end | `arr.push(5)` |
| `pop()` | Array | Removes last element | `arr.pop()` |
| `unshift()` | Array | Adds element to beginning | `arr.unshift(5)` |
| `shift()` | Array | Removes first element | `arr.shift()` |
| `map()` | Array | Transforms each element | `arr.map(x => x * 2)` |
| `filter()` | Array | Filters based on condition | `arr.filter(x => x > 10)` |
| `reduce()` | Array | Reduces to single value | `arr.reduce((a, b) => a + b, 0)` |
| `forEach()` | Array | Iterates without return | `arr.forEach(x => console.log(x))` |
| `find()` | Array | Finds first matching element | `arr.find(x => x > 10)` |
| `Object.keys()` | Object | Returns array of keys | `Object.keys(obj)` |
| `Object.values()` | Object | Returns array of values | `Object.values(obj)` |
| `Object.entries()` | Object | Returns key-value pairs | `Object.entries(obj)` |

---

## **🎯 Key Takeaways**
✔ **Arrays** store ordered collections, while **objects** store key-value pairs.  
✔ Use **array methods** like `map()`, `filter()`, and `reduce()` for functional programming.  
✔ Objects can be manipulated using **dot notation** or `Object.keys()`, `Object.values()`, and `Object.entries()`.  
✔ Always use the best method for the task: `find()` for searching, `map()` for transformations, `reduce()` for aggregation.  

---

### **🚀 Challenge**
1. Create an array of numbers and use `map()` to double them.  
2. Filter the numbers greater than 10 using `filter()`.  
3. Create an object with name, age, and city. Add a new property and remove one.  
4. Use `Object.keys()` and `Object.values()` on the object.  

