import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  box: {
    width: "50%",
    margin: "2rem auto 3.5rem auto",
    backgroundColor: colors.primary.violet,
    color: colors.secondary.white,
    borderRadius: "0.4rem",
    padding: "2rem 3rem",
    [sizes.down("lg")]: {
      width: "60%",
      padding: "2rem 2.5rem",
    },
    [sizes.down("sm2")]: {
      width: "90%",
      margin: "2rem auto"
    },
    "& p": {
      lineHeight: "1.625rem",
    },
    "& a": {
      color: colors.secondary.white,
      transition: "all 0.2s ease-in",
      "&:hover": {
        color: colors.primary.lightViolet,
      },
    },
  },
});

export default useStyles;
