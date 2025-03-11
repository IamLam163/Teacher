### **Practical Example of JSX (JavaScript XML)**

JSX is a syntax extension for JavaScript that looks like HTML but allows JavaScript expressions inside it. React uses JSX to describe UI components.

---

### **1. Basic JSX Example**

Here’s a simple **React component using JSX**:

```jsx
import React from "react";

const Welcome = () => {
  const name = "Alice";
  return <h1>Welcome, {name}!</h1>;
};

export default Welcome;
```

🔹 JSX allows us to **embed JavaScript expressions** inside `{}`.

---

### **2. JSX with Functions & Variables**

JSX lets you use **functions and variables** to create dynamic UI.

```jsx
const getGreeting = (name) => {
  return `Hello, ${name}!`;
};

const Greeting = () => {
  const user = "Bob";
  return <h2>{getGreeting(user)}</h2>;
};
```

🔹 Here, `getGreeting(user)` dynamically generates the greeting.

---

### **3. JSX with Conditional Rendering**

JSX supports **ternary operators** for conditions.

```jsx
const Status = ({ isLoggedIn }) => {
  return <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>;
};
```

Usage:

```jsx
<Status isLoggedIn={true} /> // Renders: "Welcome back!"
```

🔹 The `{isLoggedIn ? "Welcome back!" : "Please log in."}` is a **ternary expression inside JSX**.

---

### **4. JSX with Loops (Rendering Lists)**

JSX allows rendering lists using `.map()`.

```jsx
const FruitsList = () => {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};
```

🔹 Each `<li>` element uses a **unique key** (`key={index}`) for React to track changes efficiently.

---

### **5. JSX with Inline Styles**

You can apply **inline styles** using an object.

```jsx
const StyledText = () => {
  const styles = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold"
  };

  return <p style={styles}>This text is styled using JSX!</p>;
};
```

🔹 **JSX uses camelCase for CSS properties**, like `fontSize` instead of `font-size`.

---

### **Key JSX Rules**

✅ Must have a **single parent element** (`<>...</>` if needed).  
✅ Use `{}` for **JavaScript expressions** inside JSX.  
✅ **Self-closing tags** (e.g., `<img />`, `<input />`).  
✅ **Class → className**, **for → htmlFor** in JSX (because `class` and `for` are reserved in JavaScript).

---
