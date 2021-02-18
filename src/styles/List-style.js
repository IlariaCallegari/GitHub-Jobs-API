import { createUseStyles } from "react-jss";
import sizes from "./breakpoints";

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
        columnGap: "2rem",
        rowGap: "4rem",
    },
  },
});

export default useStyles;
