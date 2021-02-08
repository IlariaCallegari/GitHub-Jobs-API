import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { JobContext, JOB_PER_PAGE } from "./contexts/JobContext";
// import {fetchJobs} from "./services/api";
import Header from "./Parts/Header/Header";
import Main from "./components/Main";
import useStyle from "./assets/styles/App-style";

const MAX_JOB_PER_PAGE = 50;

function App() {
  const {
    jobs,
    numClick,
    displayedJobs,
    setDisplayedJobs,
    checkIfLoaded,
  } = useContext(JobContext);

  useEffect(() => {
    setDisplayedJobs([...jobs.slice(0, JOB_PER_PAGE * numClick)]);
  }, [numClick, jobs, setDisplayedJobs]);

  useEffect(() => {
    checkIfLoaded();
  }, [displayedJobs, checkIfLoaded]);

  //app state
  // const [pageParam, setPageParam] = useState(0);
  // const [error, setError] = useState("");

  //context
  const { isDark } = useContext(ThemeContext);
  // const {jobs, setJobs} = useContext(JobContext)

  // useEffect(() => {
  //   fetchJobs().then(
  //     (jobs) => {
  //       setJobs([...jobs]);
  //     },
  //     (error) => {
  //       setError(error);
  //     }
  //   );
  // });

  //style
  const classes = useStyle(isDark);
  const { app } = classes;

  return (
    <div className={app}>
      <Header />
      <Main />
    </div>
  );
}

export { App, MAX_JOB_PER_PAGE };
