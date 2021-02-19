import { createUseStyles } from "react-jss";
import bgPatternHeader from "../assets/desktop/bg-pattern-header.svg";
import colors from "../utils/variables";
import sizes from "./breakpoints";

const useStyle = createUseStyles({
  header: {
    height: "10.7rem",
    backgroundImage: `url(${bgPatternHeader})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [sizes.down("xs")]: {
      backgroundColor: colors.primary.violet,
    },
  },
});

export default useStyle;
