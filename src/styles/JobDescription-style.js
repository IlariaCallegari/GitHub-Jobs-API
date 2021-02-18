import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  container: (isDark) => ({
    width: "50%",
    margin: "0 auto",
    borderRadius: "0.4rem",
    overflow: "hidden",
    marginTop: "2rem",
    padding: "3rem",
    background: isDark ? colors.primary.veryDarkBlue : colors.secondary.white,
    color: isDark ? colors.secondary.gray : colors.secondary.darkGrey,
    transition: "all 0.5s ease-in",
    fontSize: "1rem",
  }),
  position: (isDark) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    lineHeight: "2rem",
    "& h2": {
      color: isDark ? colors.secondary.white : colors.primary.veryDarkBlue,
      transition: "all 0.5s ease-in",
      fontWeight: "400",
    },
    "& div p:nth-child(3)": {
      color: colors.primary.violet,
      fontSize: "0.875rem",
      marginTop: "-0.4rem",
    },
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
  jobDescription: (isDark) => ({
    marginTop: "1.5rem",
    lineHeight: "1.6rem",
    "& p, & ol, & br, & ul": {
      marginTop: "1rem",
      marginBottom: "0.5rem",
    },
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      marginTop: "1rem",
      marginBottom: "0.5rem",
      fontWeight: "400",
      color: isDark ? colors.secondary.white : colors.primary.veryDarkBlue,
      transition: "all 0.5s ease-in",
    },
    "& ul": {
      "& li": {
        marginBottom: "0.5rem",
        "&::marker": {
          display: "list-item",
          color: colors.primary.violet,
        },
      },
    },
  }),
});

export default useStyles;