import { createUseStyles } from "react-jss";
import bgPatternDesktop from "../assets/desktop/bg-pattern-header.svg";
import bgPatternMobile from "../assets/mobile/bg-pattern-header.svg";
import sizes from "../utils/breakpoints";

const useStyle = createUseStyles({
  header: {
    height: "10.7rem",
    backgroundImage: `url(${bgPatternDesktop})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [sizes.up("xl2")]: {
      height: "15rem",
    },
    [sizes.down("xs")]: {
      backgroundImage: `url(${bgPatternMobile})`,
    },
  },
});

export default useStyle;
