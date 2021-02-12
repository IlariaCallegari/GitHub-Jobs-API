import { createUseStyles } from "react-jss";
import colors from "../../utils/variables";

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
  logo: (isDark) => ({
    width: "8.75rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(89, 100, 224, 0.15)",
    transition: "all 0.5s ease-in",
  }),
  infos: {
    width: "calc(100% - 8.75rem)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem 0 3rem",
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
  },
  button: (isDark) => ({
    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(89, 100, 224, 0.15)",
    color: isDark ? colors.secondary.white : colors.primary.violet,
    marginLeft: "1rem",
    padding: "1rem 2rem",
    fontFamily: "inherit",
    fontSize: "inherit",
    border: "none",
    borderRadius: "0.3rem",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      transform: "translateY(0.1rem)",
      backgroundColor: "rgba(89, 100, 224, 0.35)",
    },
  }),
});

export default useStyles;
