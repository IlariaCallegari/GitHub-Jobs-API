import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyles = createUseStyles({
  formBackground: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    position: "fixed",
    zIndex: 300,
    marginTop: "calc(-13.18rem)",
  },
  form: {
    width: "80%",
    height: "15rem",
    margin: "0 auto",
    background: colors.secondary.white,
    borderRadius: "0.4rem",
    marginTop: "15rem",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    display: "flex",
    flexDirection: "column",
  },
  locationBox: {
    padding: "1.5rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `2px solid ${colors.secondary.lightGrey}`,
    "& input": {
      width: "90%",
      border: "none",
      outline: "none",
      fontSize: "1.1rem",
    },
  },
  checkBox: {
    padding: "1rem 2rem 0 1.5rem",
    display: "flex",
    alignItems: "center",
    "& label": {
      fontSize: "1.1rem",
      color: "black",
      fontWeight: "400",
      marginLeft: "1rem"
    },
  },
});

export default useStyles;
