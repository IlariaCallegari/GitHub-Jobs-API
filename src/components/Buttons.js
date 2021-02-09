import React from "react";
import classNames from "classnames";
import useStyles from "../assets/styles/Button-style.js";

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
  const classes = useStyles();
  const { buttonSecondary, general} = classes;

  return (
    <button className={classNames(general, buttonSecondary)} onClick={handleclick}>
      {text}
    </button>
  );
}

export { ButtonPrimary, ButtonSecondary };
