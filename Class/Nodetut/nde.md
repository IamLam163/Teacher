## **Node.js Crash Course**

### **1. What is Node.js?**
Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It allows you to run JavaScript on the server and is widely used for building scalable network applications.

- **Asynchronous & Event-Driven**: Uses a non-blocking I/O model.
- **Single-Threaded**: Uses an event loop to handle multiple connections.
- **Fast Execution**: Powered by Google’s V8 engine.

---

### **2. Installing Node.js**
1. Download from [nodejs.org](https://nodejs.org/)
2. Verify installation:
   ```sh
   node -v  # Check Node.js version
   npm -v   # Check npm (Node Package Manager) version
   ```
3. Initialize a project:
   ```sh
   mkdir my-node-app && cd my-node-app
   npm init -y  # Creates package.json
   ```

---

### **3. Basic Node.js Code**
Create `app.js`:
```js
console.log("Hello, Node.js!");
```
Run it:
```sh
node app.js
```

---

### **4. Modules in Node.js**
Node.js has built-in modules like `fs`, `http`, `path`, etc.

#### **Importing Modules**
- **CommonJS (require)**
  ```js
  const fs = require("fs");
  ```
- **ES Modules (import)**
  ```js
  import fs from "fs";
  ```

#### **Example: File System Module**
Create a file and write content:
```js
const fs = require("fs");

fs.writeFileSync("message.txt", "Hello from Node.js!");
console.log("File written successfully.");
```

---

### **5. Creating a Simple HTTP Server**
Create `server.js`:
```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
```
Run:
```sh
node server.js
```
Open [http://localhost:3000](http://localhost:3000) in a browser.

---

### **6. Using npm & Installing Packages**
1. Install Express.js:
   ```sh
   npm install express
   ```
2. Create an Express server (`server.js`):
   ```js
   const express = require("express");
   const app = express();

   app.get("/", (req, res) => {
     res.send("Hello, Express!");
   });

   app.listen(3000, () => {
     console.log("Server running on http://localhost:3000");
   });
   ```
3. Run:
   ```sh
   node server.js
   ```

---

### **7. Working with APIs**
#### **Fetching Data from an API**
```js
const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```
Install axios:
```sh
npm install axios
```

---

### **8. Reading Environment Variables**
Create a `.env` file:
```
PORT=5000
```
Install dotenv:
```sh
npm install dotenv
```
Use it in `server.js`:
```js
require("dotenv").config();
console.log(`Server running on port ${process.env.PORT}`);
```

---

### **9. File Handling**
#### **Reading a File**
```js
const fs = require("fs");

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

### **10. Using Middleware in Express**
Middleware functions are used for logging, authentication, etc.
```js
const express = require("express");
const app = express();

// Custom middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Middleware Example");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### **11. Working with Databases**
#### **Connecting to MongoDB (Mongoose)**
1. Install Mongoose:
   ```sh
   npm install mongoose
   ```
2. Connect to MongoDB:
   ```js
   const mongoose = require("mongoose");

   mongoose.connect("mongodb://localhost:27017/mydatabase", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   }).then(() => console.log("Connected to MongoDB"))
     .catch(err => console.error(err));
   ```
3. Define a model:
   ```js
   const User = mongoose.model("User", { name: String, age: Number });

   const user = new User({ name: "John", age: 30 });
   user.save().then(() => console.log("User saved"));
   ```

---

### **12. Using Async/Await**
```js
const fetchData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
```

---

### **13. Deploying a Node.js App**
1. **Using PM2 for Process Management**:
   ```sh
   npm install -g pm2
   pm2 start server.js
   pm2 list
   pm2 restart server.js
   pm2 stop server.js
   ```
2. **Hosting on Railway/Vercel/Render**:
   - Upload your project to GitHub.
   - Deploy on platforms like [Railway](https://railway.app/), [Vercel](https://vercel.com/), or [Render](https://render.com/).

---

### **14. Bonus: Build a REST API with Express**
```js
const express = require("express");
const app = express();

app.use(express.json());

const users = [{ id: 1, name: "Alice" }];

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add a user
app.post("/users", (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

app.listen(3000, () => console.log("API running on port 3000"));
```

---

### **15. Next Steps**
- Learn about **JWT Authentication** (`jsonwebtoken`).
- Explore **WebSockets** with `socket.io`.
- Use **GraphQL** (`apollo-server`).
- Implement **Microservices**.
- Learn **Docker** for containerization.

---

