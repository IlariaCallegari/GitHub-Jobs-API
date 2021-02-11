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
  logo: {
    width: "8.75rem",
    height: "100%",
    "& img": {
      minHeight: "100%",
      maxWidth: "100%",
    }
  },
  infos: {
    width: "calc(100% - 8.75rem)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2.5rem 0 2.5rem",
  },
  companyName: isDark => ({
    fontWeight: "400",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: isDark ? colors.secondary.white : colors.primary.veryDarkBlue,
    transition: "all 0.5s ease-in"
  }),
  url: {
    color: colors.secondary.darkGrey,
  },
});

export default useStyles;
