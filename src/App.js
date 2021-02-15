import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { JobContext, JOB_PER_PAGE } from "./contexts/JobContext";
import fetchJobs from "./services/api";
import Header from "./Parts/Header/Header";
import Main from "./components/Main";
import JobDescriptionPage from "./components/JobDescriptionPage";
import useStyle from "./assets/styles/App-style";

const MAX_JOB_PER_PAGE = 50;

function App() {
  const { isDark } = useContext(ThemeContext);
  const {
    jobs,
    setJobs,
    numClick,
    setDisplayedJobs,
    setIsLoading,
    findJob,
    setError,
    error,
  } = useContext(JobContext);

  useEffect(() => {
    fetchJobs()
      .then((data) => {
        const jobs = JSON.parse(data.contents);
        setJobs(jobs);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [setIsLoading, setJobs, setError]);

  useEffect(() => {
    setDisplayedJobs([...jobs.slice(0, JOB_PER_PAGE * numClick)]);
  }, [numClick, jobs, setDisplayedJobs]);

  const classes = useStyle(isDark);
  const { app } = classes;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <Router>
        <div className={app}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route
              exact
              path="/job-description/:id"
              render={(routeProps) => (
                <JobDescriptionPage
                  jobSelected={findJob(routeProps.match.params.id)}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App, MAX_JOB_PER_PAGE };
