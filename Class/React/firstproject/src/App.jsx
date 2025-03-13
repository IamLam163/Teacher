import React from "react";
import "./App.css";
import Greeting from "./Greeting";
import UserCard from "./UserCard";
import Button from "./Button";

function App() {
  //function as Props
  const showAlert = () => {
    alert("Hello from App component");
  };

  return (
    <>
      <p> React Components</p>
      <h1>
        Components are building blocks that allow us create reusable and
        independent pieces of UI
      </h1>
      <Greeting name="Cele" />
      <Greeting name="Ola" />
      <UserCard name="Alex" age={30} hobbies={["reading", "singing"]} />
      <Button handleClick={showAlert} label="Click Me" />
    </>
  );
}

export default App;
