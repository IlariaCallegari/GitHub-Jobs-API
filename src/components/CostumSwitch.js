import React from "react";
import IOSSwitch from "../styles/CostumSwitch-style";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    margin: 0,
  },
};

function CostumSwitch({classes}) {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const { root } = classes;
  return (
    <FormControlLabel
      className={root}
      control={
        <IOSSwitch
          checked={state.checked}
          onChange={handleChange}
          name="checked"
        />
      }
    />
  );
}

export default withStyles(styles)(CostumSwitch);
