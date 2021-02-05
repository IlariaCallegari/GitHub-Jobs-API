import React from "react";
import useStyle from "../assets/styles/Button-style.js";

function Button({text, handleClick}) {
  //style
  const classes = useStyle();
  const { button } = classes;

  return <button className={button}>{text}</button>;
}

export default Button;
