import { createUseStyles } from "react-jss";
import colors from "../utils/variables";

const useStyle = createUseStyles({
  app: (isDark) => ({
    backgroundColor: isDark
      ? colors.primary.midnight
      : colors.secondary.lightGrey,
    minWidth: "100%",
    transition: "all 0.5s ease-in",
  }),
});

export default useStyle;
