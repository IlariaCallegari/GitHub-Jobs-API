import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { JobContext, JOB_PER_PAGE } from "./contexts/JobContext";
// import {fetchJobs} from "./services/api";
import Header from "./Parts/Header/Header";
import Main from "./components/Main";
import useStyle from "./assets/styles/App-style";
import {fetchJobs} from "./services/api"

const MAX_JOB_PER_PAGE = 50;

function App() {
  //app state
  // const [pageParam, setPageParam] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { isDark } = useContext(ThemeContext);
  const { jobs, setJobs, numClick, setDisplayedJobs } = useContext(JobContext);

  useEffect(() => {
    setDisplayedJobs([...jobs.slice(0, JOB_PER_PAGE * numClick)]);
  }, [numClick, jobs, setDisplayedJobs]);

  useEffect(() => {
    fetchJobs()
      .then((data) => {
        console.log(data)
        setIsLoaded(true);
        setJobs([...data]);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  //style
  const classes = useStyle(isDark);
  const { app } = classes;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className={app}>
        <Header />
        <div>Loading...</div>
      </div>
    );
  } else {
    return (
      <div className={app}>
        <Header />
        <Main />
      </div>
    );
  }
}

export { App, MAX_JOB_PER_PAGE };
