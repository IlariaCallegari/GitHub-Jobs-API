import React, {memo} from "react";
import Form from "./Form";
import JobList from "./JobList"
import useStyles from "../assets/styles/Main-style";

function Main({jobs, searchJobs}) {
  const classes = useStyles();
  const {main} = classes; 
  return (
    <section className={main}>
      <Form searchJobs={searchJobs} />
      <JobList jobs={jobs} />
    </section>
  );
}

export default memo(Main);
