import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  mobileFilter: {
    display: "none",
    [sizes.down("xs")]: {
      display: "flex",
      cursor: "pointer"
    },
  },
  filterIcon: {
    display: "none",
    [sizes.down("xs")]: {
      display: "block",
      padding: "1rem",
    },
  },
  searchIcon: {
    display: "none",
    [sizes.down("xs")]: {
      display: "flex",
      padding: "0.8rem 1rem",
      borderRadius: "0.4rem",
      background: colors.primary.violet,
      marginRight: "1rem",
      "& img": {
        color: colors.secondary.white,
      },
    },
  },
});

export default useStyles;
