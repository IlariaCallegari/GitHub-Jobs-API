import React, {memo} from "react";
import useStyles from "../styles/HowToApply-style";

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

export default memo(HowToApply);
