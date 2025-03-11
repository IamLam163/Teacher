### **Components and Props in React**

**Components** are the building blocks of a React application. They allow us to create reusable and independent pieces of UI. Components can be **functional** or **class-based**.

**Props** (short for "properties") are used to pass data from a parent component to a child component. They make components dynamic and reusable.

---

## **1. Functional Components (With Props)**

A **functional component** is a simple JavaScript function that returns JSX. It can accept `props` as an argument to receive data.

### **Example: A Greeting Component**

```jsx
import React from "react";

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

Here, `props.name` is used to display a dynamic name.

---

### **Using the Component in `App.js`**

```jsx
import React from "react";
import Greeting from "./Greeting";

const App = () => {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
};

export default App;
```

### **Output:**

```
Hello, Alice!
Hello, Bob!
Hello, Charlie!
```

🔹 **Props make the component reusable**—we can change the name dynamically.

---

## **2. Default Props**

We can set default values for props in case they are not provided.

### **Example: Default Props**

```jsx
const Greeting = ({ name = "Guest" }) => {
  return <h1>Hello, {name}!</h1>;
};
```

Now, if `name` is not passed, it defaults to `"Guest"`.

---

## **3. Props in Class Components (Legacy Approach)**

Before hooks, class components were widely used in React. They use `this.props` to access props.

```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```

Usage remains the same:

```jsx
<Greeting name="Alice" />
```

---

## **4. Passing Multiple Props**

Props can be **strings, numbers, arrays, objects, or even functions**.

### **Example: User Card Component**

```jsx
const UserCard = ({ name, age, hobbies }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
```

### **Using the Component**

```jsx
<UserCard name="Alice" age={25} hobbies={["Reading", "Gaming", "Cooking"]} />
```

### **Output:**

```
Alice
Age: 25
Hobbies:
- Reading
- Gaming
- Cooking
```

---

## **5. Passing Functions as Props**

Props can also be **callback functions**, allowing child components to communicate with the parent.

### **Example: Button Component with Click Event**

```jsx
const Button = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};
```

### **Using the Button Component**

```jsx
const App = () => {
  const showAlert = () => {
    alert("Button clicked!");
  };

  return <Button handleClick={showAlert} label="Click Me" />;
};

export default App;
```

Now, clicking the button triggers the `showAlert` function.

---
