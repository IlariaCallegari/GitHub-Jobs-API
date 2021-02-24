import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { JobContext } from "./contexts/JobContext";
import ScrollToTop from "./components/HighOrderComponents/ScrollToTop";
import Header from "./Parts/Header/Header";
import Main from "./components/MainPage/Main";
import JobDescriptionPage from "./components/JobDescriptionPage/JobDescriptionPage";
import useStyle from "./styles/App-style";
import Page from "./Pages/category/Page";

function App() {
  const { isDark } = useContext(ThemeContext);
  const { findJob } = useContext(JobContext);
  const classes = useStyle(isDark);
  const { app } = classes;

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

export default App;
