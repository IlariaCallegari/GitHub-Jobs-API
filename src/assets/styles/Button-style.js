import { createUseStyles } from "react-jss";
import colors from "../../utils/variables";

const useStyles = createUseStyles({
  general: {
    marginLeft: "1rem",
    padding: "1rem 2rem",
    fontFamily: "inherit",
    fontSize: "inherit",
    border: "none",
    borderRadius: "0.3rem",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      transform: "translateY(0.1rem)",
    },
  },
  buttonPrimary: {
    color: colors.secondary.white,
    backgroundColor: colors.primary.violet,
    "&:hover": {
      backgroundColor: colors.primary.lightViolet,
    },
  },
  buttonSecondary: {
    backgroundColor: "rgba(89, 100, 224, 0.15)",
    color: colors.primary.violet,
    "&:hover": {
        backgroundColor:"rgba(89, 100, 224, 0.35)",
      },
  },
});

export default useStyles;
