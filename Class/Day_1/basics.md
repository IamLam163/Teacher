**Introduction to JavaScript**  
JavaScript is a high-level, interpreted programming language used to make web pages interactive. It enables dynamic content updates, animations, and server-side applications.

Examples:

1. **Easy:** Displaying "Hello, World!" in an alert box.
   ```javascript
   alert("Hello, World!");
   ```
2. **Medium:** Changing the text of a button when clicked.
   ```javascript
   function changeText() {
     document.getElementById("myButton").innerText = "Clicked!";
   }
   ```
3. **Hard:** Creating a simple interactive counter.
   ```javascript
   let count = 0;
   function increment() {
     count++;
     document.getElementById("counter").innerText = count;
   }
   ```

---

**Setting up a Development Environment (Node.js, Browser Console)**  
To run JavaScript code, you can use the browser console or install Node.js for a runtime environment.

Examples:

1. **Easy:** Running JavaScript in the browser console.
   - Open browser → Press `F12` → Go to Console tab → Type `console.log("Hello, Console!");`
2. **Medium:** Installing Node.js and running a JavaScript file.
   - Install Node.js → Create `app.js` file → Add `console.log("Running in Node.js");` → Run `node app.js`
3. **Hard:** Running a simple HTTP server with Node.js.
   ```javascript
   const http = require("http");
   http
     .createServer((req, res) => {
       res.write("Hello, World!");
       res.end();
     })
     .listen(3000);
   ```

---

**Variables (`let`, `const`, `var`)**  
Variables store data and can be declared using `var`, `let`, or `const`.

Examples:

1. **Easy:** Declaring and printing a variable.
   ```javascript
   let name = "John";
   console.log(name);
   ```
2. **Medium:** Using `let` inside a loop.
   ```javascript
   for (let i = 0; i < 3; i++) {
     console.log(i);
   }
   ```
3. **Hard:** Demonstrating `const` with objects.
   ```javascript
   const person = { name: "Alice", age: 25 };
   person.age = 26; // Allowed
   person = { name: "Bob", age: 30 }; // Error
   ```

---

**Data Types (Strings, Numbers, Booleans, Undefined, Null, Symbols)**  
JavaScript has different data types, including strings, numbers, booleans, undefined, null, and symbols.

Examples:

1. **Easy:** String concatenation.
   ```javascript
   let greeting = "Hello" + " World!";
   console.log(greeting);
   ```
2. **Medium:** Checking data types using `typeof`.
   ```javascript
   let value = 42;
   console.log(typeof value); // "number"
   ```
3. **Hard:** Using Symbols to create unique identifiers.
   ```javascript
   let id1 = Symbol("id");
   let id2 = Symbol("id");
   console.log(id1 === id2); // false
   ```
