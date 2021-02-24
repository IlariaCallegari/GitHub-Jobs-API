import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints";

const useStyle = createUseStyles({
  sunMoonSwitch: {
    width: "12%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [sizes.up("xl2")]: {
      width: "7%",
    },
    [sizes.down("sm")]: {
      width: "15%",
    },
    [sizes.down("sm2")]: {
      width: "16%",
    },
    [sizes.down("xs")]: {
      width: "27%",
    },
  },
});

export default useStyle;
