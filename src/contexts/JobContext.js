import React, { createContext, useState } from "react";
import seedJobList from "../seedJobList";

const JOB_PER_PAGE = 12;

const JobContext = createContext();

function JobProvider(props) {
  const [jobs, setJobs] = useState(seedJobList);
  const [displayedJobs, setDisplayedJobs] = useState([
    ...jobs.slice(0, JOB_PER_PAGE),
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [numClick, setNumClick] = useState(1);

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        displayedJobs,
        setDisplayedJobs,
        isLoading,
        setIsLoading,
        numClick,
        setNumClick,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
}

export { JobContext, JobProvider, JOB_PER_PAGE };
