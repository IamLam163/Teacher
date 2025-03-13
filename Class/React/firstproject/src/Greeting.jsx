import React from "react";
//props properties

const Greeting = (props) => {
  return (
    <div>
      <h1>Hi There!!! {props.name}</h1>
      {/* Hello, welcome!
      <p>I want to show you properties and components</p> */}
    </div>
  );
};

export default Greeting;
