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
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  navContainer: {
    margin: "0 auto",
    paddingTop: "2.75rem",
    width: "80%",
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
