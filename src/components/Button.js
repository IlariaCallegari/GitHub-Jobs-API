import React from "react";
import useStyle from "../assets/styles/Button-style.js";

function Button({ text, handleclick }) {
  const classes = useStyle();
  const { button } = classes;


  return <button className={button} onClick={handleclick}>{text}</button>;
}

export default Button;
