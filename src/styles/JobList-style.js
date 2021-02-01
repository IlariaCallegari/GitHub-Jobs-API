import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  listContainer: {
    position: "absolute",
    minHeight: "100%",
    width: "80%",
    left: "10%",
    top: "35%",
    marginBottom: "2.5rem",
  }, 
  joblist: {
    minHeight: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 31%)",
    gridTemplateRows: "repeat(autofill, 14.25rem)",
    columnGap: "3%",
    rowGap: "8%",
  },
  button: {
    position: "absolute",
    bottom: 0,
    left: "45%",
    padding: "1rem 2rem",
    fontFamily: "inherit",
    fontSize: "inherit",
    color: colors.secondary.white,
    backgroundColor: colors.primary.violet,
    border: "none",
    borderRadius: "0.3rem",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    boxShadow: "10px 5px 25px -7px rgba(0,0,0,0.35)",
    "&:hover": {
      backgroundColor: colors.primary.lightViolet,
      transform: "translateY(0.1rem)",
    },
  },
});

export default useStyles;
