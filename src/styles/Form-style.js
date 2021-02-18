import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "./breakpoints";

const useStyles = createUseStyles({
  form: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    borderRadius: "0.3rem",
    overflow: "hidden",
    zIndex: 10,
    [sizes.down("lg")]: {
      width: "81.5%",
    },
    [sizes.down("md")]: {
      width: "83%",
    },
  },
  bar: (isDark) => ({
    display: "flex",
    alignItems: "center",
    height: "5rem",
    backgroundColor: isDark
      ? colors.primary.veryDarkBlue
      : colors.secondary.white,
    transition: "all 0.5s ease-in",
    "&:nth-child(1), &:nth-child(2)": {
      borderRight: `1px solid ${colors.secondary.darkGrey}`,
      [sizes.down("xs")]: {
        borderRight: "none",
      },
    },
  }),
  icon: {
    padding: "0 1rem 0 1.5rem",
    "&:last-child": {
      padding: "0 1rem 0 1.2rem",
      [sizes.down("xl")]: {
        padding: "0 0.5rem 0 0.5rem",
      },
    },
  },
  insideForm: {
    width: "100%",
    backgroundColor: "inherit",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    [sizes.down("xs")]: {
      width: "100%",
    },
  },
  locationInput: {
    width: "30%",
    [sizes.down("xs")]: {
      display: "none",
      width: 0,
    },
  },
  checkboxInput: (isDark) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
    color: isDark ? colors.secondary.white : colors.secondary.darkGrey,
    "& label": {
      marginLeft: "0.5rem",
      [sizes.down("lg")]: {
        marginLeft: 0,
      },
    },
  }),
  [sizes.down("xs")]: {
    checkboxInput: (isDark) => ({
      display: "none",
      width: 0,
    }),
  },
});

export default useStyles;
