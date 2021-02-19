import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "./breakpoints";

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
    },
    "& p": {
      lineHeight: "1.625rem",
    },
  },
});

export default useStyles;
