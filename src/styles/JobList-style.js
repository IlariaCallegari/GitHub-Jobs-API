import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  joblist: {
    height: "100%",
    position: "relative",
    top: "20%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 31%)",
    gridTemplateRows: "repeat(auto-fill, 14.25rem)",
    columnGap: "3%",
    rowGap: "10%",
    justifyItems: "stretch"
  },
});

export default useStyles;
