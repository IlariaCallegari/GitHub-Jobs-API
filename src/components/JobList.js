import React from "react";
import useStyles from "../styles/JobList-style.js";
import Job from "./Job";

function JobList(props) {
  const { jobs } = props;
  //STYLE
  const classes = useStyles();
  const { joblist } = classes;

  return (
    <div className={joblist}>
      {jobs.map((job) => (
        <Job
          key={job.id}
          companyLogo={job.company_logo}
          hours={job.created_at}
          type={job.type}
          title={job.title}
          company={job.company}
          location={job.location}
        />
      ))}
    </div>
  );
}

export default JobList;
