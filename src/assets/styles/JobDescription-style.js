import { createUseStyles } from "react-jss";
import colors from "../../utils/variables";

const useStyles = createUseStyles({
  container: (isDark) => ({
    width: "50%",
    margin: "0 auto",
    borderRadius: "0.4rem",
    overflow: "hidden",
    marginTop: "2rem",
    padding: "2.5rem",
    background: isDark ? colors.primary.veryDarkBlue : colors.secondary.white,
    transition: "all 0.5s ease-in",
  }),
});

export default useStyles;
