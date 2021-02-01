import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
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

  // useEffect(() => {
  //   //get data from API on page load
  //   const jobs = searchJobs();
  //   console.log(jobs)
  //   return jobs;
  // }, [jobs]);

  const searchJobs = (
    jobspec = {
      description: "software engineer",
      location: "new york",
      checked: false,
    }
  ) => {
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
      <SearchForm searchJobs={searchJobs} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
