import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  button: {
    padding: "1rem 2rem",
    fontFamily: "inherit",
    fontSize: "inherit",
    color: colors.secondary.white,
    backgroundColor: colors.primary.violet,
    border: "none",
    borderRadius: "0.3rem",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    boxShadow: "10px 5px 25px -7px rgba(0,0,0,0.35)",
    "&:hover": {
      backgroundColor: colors.primary.lightViolet,
      transform: "translateY(0.1rem)",
    },
  },
});

export default useStyles;
