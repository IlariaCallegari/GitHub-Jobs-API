import React, { createContext, useState } from "react";
import seedJobList from "../seedJobList";

const JobContext = createContext();

function JobProvider(props) {
  const [jobs, setJobs] = useState(seedJobList);
  const [jobList, setJobList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <JobContext.Provider
      value={{ jobs, setJobs, jobList, setJobList, isLoaded, setIsLoaded }}
    >
      {props.children}
    </JobContext.Provider>
  );
}

export { JobContext, JobProvider };
