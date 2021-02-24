import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { JobContext, JOB_PER_PAGE } from "./contexts/JobContext";
import ScrollToTop from "./components/HighOrderComponents/ScrollToTop";
import fetchJobs from "./services/api";
import Header from "./Parts/Header/Header";
import Main from "./components/Main";
import JobDescriptionPage from "./components/JobDescriptionPage";
import useStyle from "./styles/App-style";
import Page from "./Pages/category/Page";

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
        <ScrollToTop>
          <div className={app}>
            <Header />
            <Switch>
              <Redirect exact from="/job-description" to="/" />
              <Route exact path="/">
                <Page>
                  <Main />
                </Page>
              </Route>
              <Route
                exact
                path="/job-description/:id"
                render={(routeProps) => (
                  <Page>
                    <JobDescriptionPage
                      jobSelected={findJob(routeProps.match.params.id)}
                    />
                  </Page>
                )}
              ></Route>
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
