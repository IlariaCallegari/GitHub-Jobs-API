import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  logoImg: {
    [sizes.up("xl2")]: {
      height: "3.5rem",
    },
  },
});

export default useStyles;
