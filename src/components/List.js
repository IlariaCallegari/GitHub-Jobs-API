import React, { memo, useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import Job from "./Job";
import { lowerCase } from "../utils/helpers";
import useStyles from "../assets/styles/List-style";

function List() {
  const { displayedJobs } = useContext(JobContext);
  const classes = useStyles();
  const { list } = classes;

  return (
    <div className={list}>
      {displayedJobs.map((job) => (
        <Job
          key={job.id}
          id={job.id}
          company_logo={job.company_logo}
          created_at={job.created_at}
          type={job.type}
          title={job.title}
          company={job.company}
          location={lowerCase(job.location)}
        />
      ))}
    </div>
  );
}

export default memo(List);
