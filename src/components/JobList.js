import React, { memo, useContext, useEffect, useState } from "react";
import { JOB_PER_PAGE } from "../App";
import Job from "./Job";
import Button from "./Button";
import useStyles from "../assets/styles/JobList-style.js";
import { JobContext } from "../contexts/JobContext";
import { lowerCase } from "../utils/helpers";

function JobList() {
  const { jobs } = useContext(JobContext);
  const [displayedJobs, setDisplayedJobs] = useState([
    ...jobs.slice(0, JOB_PER_PAGE),
  ]);
  const [numClick, setNumClick] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const classes = useStyles();
  const { container, list } = classes;

  useEffect(() => {
    setDisplayedJobs([...jobs.slice(0, JOB_PER_PAGE * numClick)]);
  }, [numClick]);

  useEffect(() => {
    checkIfLoaded();
  }, [displayedJobs]);

  const checkIfLoaded = () => {
    if (displayedJobs.length === jobs.length) {
      setIsLoaded(true);
    }
  };

  return (
    <div className={container}>
      <div className={list}>
        {displayedJobs.map((job, idx) => (
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
        ))}
      </div>
      {!isLoaded && (
        <Button
          text="Load More"
          handleclick={() => setNumClick(numClick + 1)}
        />
      )}
    </div>
  );
}

export default memo(JobList);
