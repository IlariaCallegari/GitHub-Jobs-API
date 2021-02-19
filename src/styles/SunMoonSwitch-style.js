import { createUseStyles } from "react-jss";
import sizes from "./breakpoints";

const useStyle = createUseStyles({
  sunMoonSwitch: {
    width: "10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [sizes.down("sm")]: {
      width: "20%",
    },
    [sizes.down("xs")]: {
      width: "30%",
    },
  },
});

export default useStyle;
