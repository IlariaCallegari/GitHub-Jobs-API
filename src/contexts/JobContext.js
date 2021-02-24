import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
// import seedJobList from "../seedJobList";

const JOB_PER_PAGE = 12;
const JobContext = createContext();

function JobProvider(props) {
  const [fetchData, data, setData, isLoading,setIsLoading, error, setError] = useFetch();
  const [displayedJobs, setDisplayedJobs] = useState([
    ...data.slice(0, JOB_PER_PAGE),
  ]);
  const [numClick, setNumClick] = useState(1);

  useEffect(() => {
    fetchData()
  },[fetchData])

  useEffect(() => {
    setDisplayedJobs([...data.slice(0, JOB_PER_PAGE * numClick)]);
  }, [data, numClick, setDisplayedJobs]);
  
  const findJob = (id) => {
    const myJob = data.find((job) => job.id === id);
    return myJob;
  };

  return (
    <JobContext.Provider
      value={{
        setError,
        error, 
        setIsLoading,
        data,
        setData,
        isLoading,
        displayedJobs,
        setDisplayedJobs,
        numClick,
        setNumClick,
        findJob,
        fetchData
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
}

export { JobContext, JobProvider, JOB_PER_PAGE };
