import { createUseStyles } from "react-jss";
import colors from "../../utils/variables"

const useStyles = createUseStyles({
  header: {
      width: "50%", 
      height: "8.75rem",
      margin: "0 auto",
      background: colors.secondary.white, 
      borderRadius: "0.4rem",
      overflow: "hidden",
      display: "flex",
  },
  logo: {
      width: "8.75rem",
      height: "100%",
      background: "pink"
  }, 
  infos: {
      width: "calc(100% - 8.75rem)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 2.5rem 0 2.5rem"
  }, 
  company: {
      fontWeight: "400",
      fontSize: "1.5rem",
      marginBottom: "1rem"
  }, 
  url: {
      color: colors.secondary.darkGrey,
  }
});

export default useStyles;
