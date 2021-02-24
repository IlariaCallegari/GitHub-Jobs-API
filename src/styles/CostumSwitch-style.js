import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import colors from "../utils/variables";
import sizes from "../utils/breakpoints";

const MySwitch = withStyles((theme) => ({
  root: {
    width: "2.8125rem",
    height: "1.5rem",
    padding: 0,
    [sizes.up("xl2")]: {
      width: "2.6rem",
    },
    [sizes.down("md")]: {
      width: "2.9rem",
    },
    [sizes.down("sm")]: {
      width: "2.955rem",
    },
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(24px)",
      color: colors.secondary.white,
      "& + $track": {
        backgroundColor: colors.secondary.white,
        opacity: 1,
        border: "none",
      },
    },
    "&:hover $thumb": {
      backgroundColor: colors.primary.lightViolet,
    },
  },
  thumb: {
    marginTop: 3.5,
    marginLeft: 2,
    width: "0.875rem",
    height: "0.875rem",
    backgroundColor: colors.primary.violet,
    transition: "all 0.5s",
  },
  track: {
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: colors.secondary.white,
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const styles = {
  main: {
    margin: 0,
  },
};

export { MySwitch, styles };
