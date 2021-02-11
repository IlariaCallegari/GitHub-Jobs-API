import React from "react";
import useStyles from "../assets/styles/HowToApply-style";

function HowToApply({jobSelected}) {
  const classes = useStyles();
  const { box } = classes;
  return (
    <div className={box}>
      <h3>How to Apply</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        tempor ullamcorper nibh eu gravida. Cras et pretium tortor. Nullam
        dapibus nibh quis eros iaculis rutrum. Sed dapibus odio et interdum
        egestas. Vivamus tincidunt augue nisi, sit amet tempus quam suscipit eu.
        Vivamus ac elit rhoncus, pharetra massa ut, imperdiet lectus. Proin
        convallis mi ac leo consequat pulvinar. Morbi scelerisque lorem a
        faucibus venenatis. Proin quis metus feugiat, imperdiet neque luctus,
        facilisis sem.{" "}
      </p>
    </div>
  );
}

export default HowToApply;
