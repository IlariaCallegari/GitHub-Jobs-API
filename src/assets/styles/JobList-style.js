import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "80%",
    minHeight: "calc(100vh - 18.5rem)",
    margin: "5rem auto 0 auto",
    paddingBottom: "5rem",
    textAlign: "center",
  },
  list: {
    marginBottom: "3rem",
    display: "grid",
    gridTemplateColumns: "repeat(3, 31%)",
    gridTemplateRows: "repeat(auto-fill, 14rem)",
    columnGap: "2.5rem",
    rowGap: "4rem",
    justifyItems: "stretch",
  },
});

export default useStyles;
