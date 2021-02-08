import React, { memo, useContext } from "react";
import Job from "./Job";
import { JOB_PER_PAGE } from "../App";
import { JobContext } from "../contexts/JobContext";
import { lowerCase } from "../utils/helpers";

import useStyles from "../assets/styles/List-style";

function List() {
  const { jobs} = useContext(JobContext);
  const classes = useStyles();
  const { list } = classes;

  return (
    <div className={list}>
      {jobs.map(
        (job, idx) =>
          idx < JOB_PER_PAGE && (
            <Job
              key={job.id}
              id={job.id}
              companyLogo={job.company_logo}
              date={job.created_at}
              type={job.type}
              title={job.title}
              company={job.company}
              location={lowerCase(job.location)}
            />
          )
      )}
    </div>
  );
}

export default memo(List);
