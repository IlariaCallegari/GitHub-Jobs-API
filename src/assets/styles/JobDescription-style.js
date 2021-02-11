import { createUseStyles } from "react-jss";
import colors from "../../utils/variables";

const useStyles = createUseStyles({
  container: (isDark) => ({
    width: "50%",
    margin: "0 auto",
    borderRadius: "0.4rem",
    overflow: "hidden",
    marginTop: "2rem",
    padding: "2.5rem",
    background: isDark ? colors.primary.veryDarkBlue : colors.secondary.white,
    color: colors.secondary.darkGrey,
    transition: "all 0.5s ease-in",
    fontSize: "1rem",
  }),
  position: (isDark) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h1": {
      color: isDark ? colors.secondary.white : colors.primary.veryDarkBlue,
      transition: "all 0.5s ease-in",
    },
    "& div p:nth-child(3)": {
      color: colors.primary.violet,
      fontSize: "0.875rem",
      marginTop: "-0.4rem"
    },
  }),
  jobDescription: {
    marginTop: "1.5rem",
    lineHeight: "1.625rem"
  }
});

export default useStyles;
