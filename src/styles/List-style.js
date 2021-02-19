import { createUseStyles } from "react-jss";
import sizes from "../utils/breakpoints";

const useStyles = createUseStyles({
  list: {
    marginBottom: "3rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, 31%)",
    gridTemplateRows: "repeat(auto-fill, 15rem)",
    columnGap: "2.5rem",
    rowGap: "4rem",
    justifyItems: "stretch",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 48%)",
      gridTemplateRows: "repeat(auto-fill, 15rem)",
    },
    [sizes.down("sm2")]: {
      gridTemplateColumns: "repeat(2, 49%)",
      columnGap: "1.5rem",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridTemplateRows: "repeat(auto-fill, 15rem)",
    },
  },
});

export default useStyles;
