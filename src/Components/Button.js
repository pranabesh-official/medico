import React from "react";
import "./button.css";
function Button({ children, variant }) {
    console.log({children, variant})
  return (
    <button className={variant === "contained" ? "button" : "button2"}>
      {children}
    </button>
  );
}

export default Button;
