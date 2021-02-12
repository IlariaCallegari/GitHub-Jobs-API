import React from "react";
import useStyles from "../assets/styles/HowToApply-style";

function HowToApply({ jobSelected }) {
  const classes = useStyles();
  const { box } = classes;
  return (
    <div className={box}>
      <h3>How to Apply</h3>
      <p dangerouslySetInnerHTML={{ __html: jobSelected.how_to_apply }} />
    </div>
  );
}

export default HowToApply;
