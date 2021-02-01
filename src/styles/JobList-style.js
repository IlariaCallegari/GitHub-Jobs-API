import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  joblist: {
    position: "absolute",
    minHeight: "100vh",
    width: "80%", 
    left: "10%",
    top: "30%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 31%)",
    gridTemplateRows: "repeat(auto-fill, 14.25rem)",
    columnGap: "3%",
    rowGap: "10%",
    justifyItems: "stretch"
  },
});

export default useStyles;
