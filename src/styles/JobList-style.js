import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints"

const useStyles = createUseStyles({
  container: {
    width: "80%",
    minHeight: "calc(100vh - 18.5rem)",
    margin: "5rem auto 0 auto",
    paddingBottom: "5rem",
    textAlign: "center",
    [sizes.up("xl2")]: {
      width: "74%"
    }
  },
});

export default useStyles;
