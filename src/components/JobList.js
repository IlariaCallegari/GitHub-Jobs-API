import React from "react";
import useStyles from "../styles/JobList-style.js";
import Job from "./Job";
import LoadMoreButton from "./LoadMoreButton";
import { lowerCase } from "../utils/helpers";

function JobList(props) {
  const { jobs } = props;
  //STYLE
  const classes = useStyles();
  const { joblist } = classes;

  return (
    <div className={joblist}>
      {jobs.map((job, index) => {
        if (index < 12) {
          return (
            <Job
              key={job.id}
              companyLogo={job.company_logo}
              hours={job.created_at}
              type={job.type}
              title={job.title}
              company={job.company}
              location={lowerCase(job.location)}
            />
          );
        }
      })}
      <LoadMoreButton />
    </div>
  );
}

export default JobList;
