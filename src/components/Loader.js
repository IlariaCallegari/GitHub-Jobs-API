import useStyles from "../styles/Loader-style"
import CircularProgress from "@material-ui/core/CircularProgress";

function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
