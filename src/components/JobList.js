import React from "react";
import useStyles from "../styles/JobList-style.js";
import Job from "./Job";
import { lowerCase } from "../utils/helpers";

function JobList(props) {
  const { jobs } = props;
  //STYLE
  const classes = useStyles();
  const { joblist, button, listContainer } = classes;

  return (
    <div className={listContainer}>
      <div className={joblist}>
        {jobs.map(
          (job, idx) =>
            idx <= 11 && (
              <Job
                key={job.id}
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
      {jobs.length > 11 ? <button className={button}>Load More</button> : null}
    </div>
  );
}

export default JobList;
