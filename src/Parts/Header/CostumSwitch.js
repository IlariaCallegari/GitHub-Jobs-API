import React, { memo, useContext } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { MySwitch, styles } from "../../assets/styles/CostumSwitch-style.js";
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../contexts/ThemeContext.js";

const CostumSwitch = memo(({ classes }) => {
  const { checked, handleChange } = useContext(ThemeContext);

  const { main } = classes;
  return (
    <FormControlLabel
      className={main}
      control={
        <MySwitch checked={checked} onChange={handleChange} name="checked" />
      }
    />
  );
});

export default withStyles(styles)(CostumSwitch);
