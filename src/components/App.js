import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchInputs from "./SearchInputs";
import JobList from "./JobList";
import useStyles from "../styles/App-style";

const URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";

function App() {
  //STATE
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  //STYLE
  const classes = useStyles();
  const { app, container } = classes;

  const searchJobs = (jobspec) => {
    const jobSearch = { ...jobspec };
    fetch(
      `${URL}description=${jobSearch.description}&full_time=${jobSearch.checked}&location=${jobSearch.location}`
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setJobs([...data]);
        },
        (error) => {
          setError(error);
        }
      );
  };

  return (
    <div className={app}>
      <Navbar />
      <div className={container}>
        <SearchInputs searchJobs={searchJobs} />
        <JobList jobs={jobs} />
      </div>
    </div>
  );
}

export default App;
