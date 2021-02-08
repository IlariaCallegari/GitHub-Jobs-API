import React, { createContext, useState } from "react";
import seedJobList from "../seedJobList";

const JOB_PER_PAGE = 12;

const JobContext = createContext();

function JobProvider(props) {
  const [jobs, setJobs] = useState(seedJobList);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedJobs, setDisplayedJobs] = useState([
    ...jobs.slice(0, JOB_PER_PAGE),
  ]);
  const [numClick, setNumClick] = useState(1);

  const checkIfLoaded = () => {
    if (displayedJobs.length === jobs.length) {
      setIsLoaded(true);
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        isLoaded,
        setIsLoaded,
        displayedJobs,
        setDisplayedJobs,
        numClick,
        setNumClick,
        checkIfLoaded
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
}

export { JobContext, JobProvider, JOB_PER_PAGE };
