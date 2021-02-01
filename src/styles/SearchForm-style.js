import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  searchInputs: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    borderRadius: "0.3rem",
    position: "absolute",
    overflow: "hidden",
    top: "16.5%",
    left: "10%",
    zIndex: 10,
  },
  bar: {
    display: "flex",
    alignItems: "center",
    height: "5rem",
    backgroundColor: colors.secondary.white,
    "&:nth-child(1), &:nth-child(2)": {
      borderRight: `1px solid ${colors.secondary.darkGrey}`,
    },
  },
  icon: {
    padding: "0 1rem 0 1.5rem",
    "&:last-child": {
      padding: "0 1rem 0 1.2rem",
    },
  },
  form: {
    width: "100%",
  },
  input: {
    width: "80%",
    outline: "none",
    border: "none",
    color: colors.secondary.darkGrey,
    fontFamily: "inherit",
    fontSize: "1rem",
  },
  descriptionInput: {
    width: "40%",
  },
  locationInput: {
    width: "30%",
  },
  checkboxInput: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
    "& label": {
      marginLeft: "0.5rem",
    },
  },
  searchButton: {
    marginLeft: "1rem",
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
