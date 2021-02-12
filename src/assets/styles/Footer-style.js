import { createUseStyles } from "react-jss";
import colors from "../../utils/variables";

const useStyles = createUseStyles({
  footer: (isDark) => ({
    height: "6rem",
    backgroundColor: isDark
      ? colors.primary.veryDarkBlue
      : colors.secondary.white,
    transition: "all 0.5s ease-in",
  }),
  container: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: colors.secondary.darkGrey,
    transition: "all 0.5s ease-in",
    "& p": {
        marginTop: "0.7rem"
    }
  },
  jobTitle: isDark => ({
      marginBottom: "0rem",
      marginTop: "1.3rem",
      fontSize: "1.25rem",
      color: isDark? colors.secondary.white : colors.primary.veryDarkBlue,
      transition: "all 0.5s ease-in",
  }),
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
    "&:hover": {
      transform: "translateY(0.1rem)",
      backgroundColor: colors.primary.lightViolet,
    },
  },
});

export default useStyles;
