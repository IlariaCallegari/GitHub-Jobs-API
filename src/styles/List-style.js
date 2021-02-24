import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  list: {
    marginBottom: "3rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30.5%)",
    columnGap: "2.5rem",
    rowGap: "4rem",
    justifyItems: "stretch",
    [sizes.up("xl2")]: {
      gridTemplateColumns: "repeat(3, 31.4%)",
    },
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 48%)",
    },
    [sizes.down("sm2")]: {
      gridTemplateColumns: "repeat(2, 49%)",
      columnGap: "1.5rem",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
    },
  },
});

export default useStyles;
