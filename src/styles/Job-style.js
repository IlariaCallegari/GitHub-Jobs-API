import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  jobBox: (isDark) => ({
    background: isDark ? colors.primary.veryDarkBlue : colors.secondary.white,
    padding: "2rem",
    borderRadius: "0.4rem",
    position: "relative",
    textAlign: "left",
    transition: "all 0.5s ease-in",
  }),
  [sizes.down("sm")]: {
    jobBox: (isDark) => ({
      padding: "1.5rem",
    }),
  },
  logo: (isDark) => ({
    width: "3.125rem",
    height: "3.125rem",
    borderRadius: "0.8rem",
    position: "absolute",
    top: "-1.5rem",
    overflow: "hidden",
    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(89, 100, 224, 0.15)",
    backgroundSize: "cover",
    transition: "all 0.5s ease-in",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "100%",
      height: "auto",
    },
  }),
  jobType: {
    marginTop: "1rem",
    marginBottom: "1rem",
    color: colors.secondary.darkGrey,
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
    lineHeight: "1.8rem",
    "&:hover": {
      color: colors.secondary.darkGrey,
    },
  }),
  [sizes.down("sm")]: {
    jobTitle: (isDark) => ({
      fontSize: "1.1rem",
    }),
  },
  companyName: {
    marginTop: "1rem",
    marginBottom: "2rem",
    color: colors.secondary.darkGrey,
  },
  place: {
    color: colors.primary.violet,
    textTransform: "capitalize",
  },
});

export default useStyles;
