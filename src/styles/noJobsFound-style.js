import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  noJobsFound: (isDark) => ({
    margin: "0 auto",
    color: isDark ? colors.secondary.white : colors.primary.midnight,
    transition: "all 0.4s ease-in",
  }),
});

export default useStyles;
