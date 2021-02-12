import React, { createContext, useState } from "react";
import seedJobList from "../seedJobList";

const JOB_PER_PAGE = 12;

const JobContext = createContext();

function JobProvider(props) {
  const [jobs, setJobs] = useState(seedJobList);
  const [displayedJobs, setDisplayedJobs] = useState([
    ...jobs.slice(0, JOB_PER_PAGE),
  ]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [numClick, setNumClick] = useState(1);

  const findJob = (id) => {
    const myJob = jobs.find((job) => job.id === id);
    return myJob;
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        displayedJobs,
        setDisplayedJobs,
        isLoaded,
        setIsLoaded,
        numClick,
        setNumClick,
        findJob,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
}

export { JobContext, JobProvider, JOB_PER_PAGE };
