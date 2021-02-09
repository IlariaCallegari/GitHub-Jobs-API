import React from "react";
import useStyles from "../assets/styles/Loader-style"
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
