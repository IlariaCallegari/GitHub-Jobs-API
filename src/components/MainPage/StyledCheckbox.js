import { useContext } from "react";
import clsx from "clsx";
import { ThemeContext } from "../../contexts/ThemeContext";
import Checkbox from "@material-ui/core/Checkbox";
import useStyles from "../../styles/StyledCheckbox-style";

function StyledCheckbox(props) {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { root, icon, checkedIcon } = classes;
  return (
    <Checkbox
      className={root}
      disableRipple
      checkedIcon={<span className={clsx(icon, checkedIcon)} />}
      icon={<span className={icon} />}
      inputProps={{ "aria-label": "checkbox" }}
      {...props}
    />
  );
}

export default StyledCheckbox;
