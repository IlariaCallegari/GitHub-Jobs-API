import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "./breakpoints";

const useStyles = createUseStyles({
  header: (isDark) => ({
    width: "50%",
    height: "8.75rem",
    margin: "0 auto",
    background: isDark ? colors.primary.veryDarkBlue : colors.secondary.white,
    borderRadius: "0.4rem",
    overflow: "hidden",
    display: "flex",
    transition: "all 0.5s ease-in",
  }),
  [sizes.down("lg")]: {
    header: (isDark) => ({
      width: "60%",
    }),
  },
  [sizes.down("sm2")]: {
    header: (isDark) => ({
      width: "90%",
    }),
  },
  logo: (isDark) => ({
    width: "8.75rem",
    height: "8.75rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(89, 100, 224, 0.15)",
    backgroundSize: "cover",
    transition: "all 0.5s ease-in",
    "& img": {
      width: "100%",
      height: "auto",
    },
  }),
  infos: {
    width: "calc(100% - 8.75rem)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    [sizes.down("lg")]: {
      padding: "0 2.5rem",
    },
    [sizes.down("xs")]: {
      flexDirection: "column",
      width: "90%",
      marginTop: "3rem",
    },
  },
  companyName: (isDark) => ({
    fontWeight: "400",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: isDark ? colors.secondary.white : colors.primary.veryDarkBlue,
    transition: "all 0.5s ease-in",
  }),
  url: {
    color: colors.secondary.darkGrey,
    [sizes.down("xs")]: {
      textAlign: "center",
    },
  },
  button: (isDark) => ({
    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(89, 100, 224, 0.15)",
    padding: "1rem 2rem",
    fontFamily: "inherit",
    fontSize: "inherit",
    border: "none",
    borderRadius: "0.3rem",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    "& a": {
      color: isDark ? colors.primary.lightViolet : colors.primary.violet,
    },
    "&:hover": {
      transform: "translateY(0.1rem)",
      backgroundColor: "rgba(89, 100, 224, 0.35)",
    },
  }),
  [sizes.down("xs")]: {
    header: (isDark) => ({
      height: "14.3rem",
      flexDirection: "column",
      alignItems: "center",
    }),
    logo: (isDark) => ({
      width: "3.125rem",
      height: "3.12rem",
      borderRadius: "0.8rem",
      marginTop: "calc(-1.50rem)",
      position: "absolute",
      backgroundColor: isDark
        ? colors.primary.veryDarkBlue
        : colors.secondary.lightGrey,
      zIndex: "100 !important",
      "& img": {
        zIndex: "200 !important",
      },
    }),
  },
});

export default useStyles;
