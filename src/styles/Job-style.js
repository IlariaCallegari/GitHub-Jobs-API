import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  jobBox: {
    background: colors.secondary.white,
    padding: "2rem",
    borderRadius: "0.4rem",
    position: "relative",
    color: colors.secondary.darkGrey,
  },
  logo: {
    height: "3.125rem",
    width: "3.125rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.8rem",
    position: "absolute",
    top: "-1.5rem",
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
  jobTitle: {
    fontSize: "1.25rem",
    fontWeight: "400",
    marginBottom: "1rem",
    color: colors.primary.veryDarkBlue,
  },
  companyName: {
    marginBottom: "2rem",
  },
  place: {
    color: colors.primary.violet,
    textTransform: "capitalize",
  },
});

export default useStyles;
