import React from "react";
import "./Button.css";
function Button({ className, children, name }) {
  return <button className={`button ${className}`}>{name}</button>;
}

export default Button;
