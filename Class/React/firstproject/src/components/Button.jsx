import React from "react";

const Button = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
