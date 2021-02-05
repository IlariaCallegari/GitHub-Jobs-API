import { createUseStyles } from "react-jss";
import bgPatternHeader from "../desktop/bg-pattern-header.svg";

const useStyle = createUseStyles({
  header: {
    height: "10.7rem",
    backgroundImage: `url(${bgPatternHeader})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

export default useStyle;
