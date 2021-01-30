import React from "react";
import useStyles from "../styles/JobSpec-style";

function JobSpec() {
  const classes = useStyles();
  const { jobspec, logo, jobType, jobName, companyName, location } = classes;
  return (
    <div className={jobspec}>
      <div className={logo}>Logo</div>
      <div className={jobType}>
        <span>Hours</span> • <span>Type</span>
      </div>
      <div className={jobName}>Job Name</div>
      <div className={companyName}>Company Name</div>
      <div className={location}>Location</div>
    </div>
  );
}

export default JobSpec;
