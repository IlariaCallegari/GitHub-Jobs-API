import { createUseStyles } from "react-jss";
import colors from "../../utils/variables";

const useStyles = createUseStyles({
  jobBox: (isDark) => ({
    background: isDark ? colors.primary.veryDarkBlue : colors.secondary.white,
    padding: "2rem",
    borderRadius: "0.4rem",
    position: "relative",
    color: colors.secondary.darkGrey,
    textAlign: "left",
    transition: "all 0.5s ease-in",
  }),
  logo: {
    height: "3.125rem",
    width: "3.125rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.8rem",
    position: "absolute",
    top: "-1.5rem",
    "& img": {
      minHeight: "100%",
      maxWidth: "100%",
    },
  },
  jobType: {
    marginTop: "1rem",
    marginBottom: "1rem",
    "& :nth-child(1)": {
      paddingRight: "0.5rem",
    },
    "& :nth-child(2)": {
      paddingLeft: "0.5rem",
    },
  },
  jobTitle: (isDark) => ({
    fontSize: "1.25rem",
    fontWeight: "400",
    marginBottom: "1rem",
    color: isDark ? colors.secondary.white : colors.primary.veryDarkBlue,
    transition: "all 0.5s ease-in",
    cursor: "pointer",
    "&:hover": {
      color: colors.secondary.darkGrey,
    },
  }),
  companyName: {
    marginBottom: "2rem",
  },
  place: {
    color: colors.primary.violet,
    textTransform: "capitalize",
  },
});

export default useStyles;
