import React from "react";
import useStyles from "../styles/JobList-style.js";
import JobSpec from "./JobSpec";

function JobList() {
  const classes = useStyles();
  const { joblist } = classes;
  return (
    <div className={joblist}>
      <JobSpec />
      <JobSpec />
      <JobSpec />
      <JobSpec />
      <JobSpec />
      <JobSpec />
      <JobSpec />
      <JobSpec />
      <JobSpec />
      <JobSpec />
      
    </div>
  );
}

export default JobList;
