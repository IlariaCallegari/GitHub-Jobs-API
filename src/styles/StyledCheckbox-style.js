import { makeStyles } from "@material-ui/core/styles";
import colors from "../utils/variables";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: (isDark) => ({
    borderRadius: 3,
    width: 24,
    height: 24,
    backgroundColor: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(25,32,45,0.1)",
    "input:disabled ~ &": {
      boxShadow: "none",
      background: colors.secondary.lightGrey,
    },
  }),
  checkedIcon: {
    backgroundColor: colors.primary.violet,
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: colors.primary.violet,
    },
  },
});

export default useStyles;
