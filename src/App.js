import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { JobContext, JOB_PER_PAGE } from "./contexts/JobContext";
import { fetchJobs } from "./services/api";
import Header from "./Parts/Header/Header";
import Main from "./components/Main";
import JobDescriptionPage from "./components/JobDescriptionPage";
import useStyle from "./assets/styles/App-style";

const MAX_JOB_PER_PAGE = 50;

function App() {
  //app state
  // const [pageParam, setPageParam] = useState(0);
  const [error, setError] = useState(null);
  const { isDark } = useContext(ThemeContext);
  const { jobs, setJobs, numClick, setDisplayedJobs, setIsLoaded } = useContext(
    JobContext
  );

  useEffect(() => {
    setDisplayedJobs([...jobs.slice(0, JOB_PER_PAGE * numClick)]);
  }, [numClick, jobs, setDisplayedJobs]);

  // useEffect(() => {
  //   fetchJobs()
  //     .then((data) => {
  //       console.log(data)
  //       setIsLoaded(true);
  //       setJobs([...data]);
  //     })
  //     .catch((error) => {
  //       setIsLoaded(true);
  //       setError(error);
  //     });
  // }, []);

  //style
  const classes = useStyle(isDark);
  const { app } = classes;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <Router>
        <Switch>
          <div className={app}>
            <Header />
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/job-description/:id">
              <JobDescriptionPage />
            </Route>
          </div>
        </Switch>
      </Router>
    );
  }
}

export { App, MAX_JOB_PER_PAGE };
