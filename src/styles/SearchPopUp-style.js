import { createUseStyles } from "react-jss";
import colors from "../utils/variables";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  formBackground: {
    display: "none",
    [sizes.down("xs")]: {
      display: "block",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.35)",
      position: "fixed",
      zIndex: 300,
      marginTop: "calc(-13.18rem)",
    },
  },
  form: {
    display: "none",
  },
  locationBox: {
    display: "none",
    [sizes.down("xs")]: {
      padding: "1.5rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      borderBottom: `1px solid #707070`,
    },
  },
  checkBox: {
    display: "none",
    [sizes.down("xs")]: {
      padding: "1rem 2rem 0 1.5rem",
      display: "flex",
      alignItems: "center",
    },
  },
  [sizes.down("xs")]: {
    form: (isDark) => ({
      width: "80%",
      height: "15rem",
      margin: "0 auto",
      background: isDark ? colors.primary.veryDarkBlue : colors.secondary.white,
      borderRadius: "0.4rem",
      marginTop: "15rem",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      display: "flex",
      flexDirection: "column",
    }),
    locationBox: (isDark) => ({
      "& input": (isDark) => ({
        width: "90%",
        border: "none",
        outline: "none",
        fontSize: "1.1rem",
        background: "inherit",
        color: isDark ? colors.secondary.gray : colors.primary.veryDarkBlue,
      }),
    }),
    checkBox: (isDark) => ({
      "& label": (isDark) => ({
        fontSize: "1.1rem",
        fontWeight: "400",
        marginLeft: "1rem",
        color: isDark ? colors.secondary.gray : colors.primary.veryDarkBlue,
      }),
    }),
  },
});

export default useStyles;
