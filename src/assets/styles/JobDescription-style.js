import { createUseStyles } from "react-jss";
import colors from "../../utils/variables";

const useStyles = createUseStyles({
  container: (isDark) => ({
    width: "50%",
    margin: "0 auto",
    borderRadius: "0.4rem",
    overflow: "hidden",
    marginTop: "2rem",
    padding: "3rem",
    background: isDark ? colors.primary.veryDarkBlue : colors.secondary.white,
    color: colors.secondary.darkGrey,
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
  jobDescription: (isDark) => ({
    marginTop: "1.5rem",
    lineHeight: "1.6rem",
    "& p, & ol, & ul, & li, & br, & ul br, & ul li br": {
      marginTop: 0,
      marginBottom: 0,
    },
    "& h2, & h3, & h4, & h5, & h6": {
      marginTop: 0,
      marginBottom: 0,
      fontWeight: "400",
      color: isDark ? colors.secondary.white : colors.primary.veryDarkBlue,
      transition: "all 0.5s ease-in",
    },
  }),
});

export default useStyles;
