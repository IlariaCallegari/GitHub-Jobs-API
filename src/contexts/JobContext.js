import React, { createContext, useState } from "react";
import seedJobList from "../seedJobList";

const JobContext = createContext();

function JobProvider(props) {
  const [jobs, setJobs] = useState(seedJobList);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        isLoaded,
        setIsLoaded,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
}

export { JobContext, JobProvider };
