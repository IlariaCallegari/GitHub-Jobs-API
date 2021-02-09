import React, { useContext } from "react";
import classNames from "classnames";
import useStyles from "../assets/styles/Button-style.js";
import { ThemeContext } from "../contexts/ThemeContext.js";

function ButtonPrimary({ text, handleclick }) {
  const classes = useStyles();
  const { buttonPrimary, general } = classes;

  return (
    <button className={classNames(general, buttonPrimary)} onClick={handleclick}>
      {text}
    </button>
  );
}

function ButtonSecondary({ text, handleclick }) {
  const {isDark} = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { buttonSecondary, general} = classes;

  return (
    <button className={classNames(general, buttonSecondary)} onClick={handleclick}>
      {text}
    </button>
  );
}

export { ButtonPrimary, ButtonSecondary };
