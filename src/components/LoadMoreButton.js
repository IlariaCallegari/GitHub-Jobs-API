import React from "react";
import useStyles from "../styles/LoadMoreButton-style.js";

function LoadMoreButton() {
  const classes = useStyles();
  const { button, container } = classes;
  return (
    <div className={container}>
      <button className={button}>Load More</button>
    </div>
  );
}

export default LoadMoreButton;
