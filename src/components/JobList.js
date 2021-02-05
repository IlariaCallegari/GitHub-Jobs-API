import React, { memo, useContext } from "react";
import { JOB_PER_PAGE} from "../App";
import List from "./List";
import Button from "./Button";
import useStyles from "../assets/styles/JobList-style.js";
import { JobContext } from "../contexts/JobContext";

function JobList() {
  const {jobs} = useContext(JobContext)
  //STYLE
  const classes = useStyles();
  const { container } = classes;

  return (
    <div className={container}>
      <List />
      {jobs.length > JOB_PER_PAGE && (
        <Button text="Load More" />
      )}
    </div>
  );
}

export default memo(JobList);
