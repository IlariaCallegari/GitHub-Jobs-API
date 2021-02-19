import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  button: {
    marginLeft: "1rem",
    padding: "1rem 2rem",
    fontFamily: "inherit",
    fontSize: "inherit",
    border: "none",
    borderRadius: "0.3rem",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    color: colors.secondary.white,
    backgroundColor: colors.primary.violet,
    [sizes.down("lg")]: {
      marginLeft: "0.5rem",
      padding: "1rem 1.25rem",
    },
    [sizes.down("xs")]: {
      margin: "1rem 2rem 0 2rem",
    },
    "&:hover": {
      transform: "translateY(0.1rem)",
      backgroundColor: colors.primary.lightViolet,
    },
  },
});

export default useStyles;
