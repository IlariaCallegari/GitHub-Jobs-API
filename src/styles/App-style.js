import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  app: {
    height: "100vh",
    width: "100vw",
  },
  container: {
    padding: "0 10.3125rem 0 10.3125rem",
    width: "100%",
    height: "100%",
    backgroundColor: colors.secondary.lightGrey,
    position: "relative",
  },
});

export default useStyles;
