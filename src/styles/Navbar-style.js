import { createUseStyles } from "react-jss";
import headerPattern from "../assets/desktop/bg-pattern-header.svg";
import colors from "../utils/variables"

const useStyles = createUseStyles({
  navbar: {
    backgroundColor: colors.secondary.lightGrey,
    backgroundImage: `url(${headerPattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: "20%",
  },
  navContainer: {
    padding: "2.75rem 10.3125rem 0 10.3125rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  navSwitch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "10%",
  },
});

export default useStyles;
