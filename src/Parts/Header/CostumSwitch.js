import { memo, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { MySwitch, styles } from "../../styles/CostumSwitch-style.js";
import { withStyles } from "@material-ui/core/styles";

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
