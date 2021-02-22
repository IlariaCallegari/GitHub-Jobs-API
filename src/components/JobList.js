import React, { memo, useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import List from "./List";
import Button from "./Button";
import Loader from "./Loader";
import useStyles from "../styles/JobList-style.js";
import NoJobsFound from "./NoJobs";

function JobList() {
  const { numClick, setNumClick, displayedJobs, jobs, isLoading } = useContext(
    JobContext
  );

  const classes = useStyles();
  const { container } = classes;

  return (
    <div className={container}>
      {isLoading ? <Loader /> : <List />}
      {!isLoading && displayedJobs.length === 0 && <NoJobsFound />}
      {!isLoading && displayedJobs.length !== jobs.length && (
        <Button
          text="Load More"
          handleclick={() => setNumClick(numClick + 1)}
        />
      )}
    </div>
  );
}

export default memo(JobList);
