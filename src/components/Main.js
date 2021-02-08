import React, {memo} from "react";
import Form from "./Form";
import JobList from "./JobList"
import useStyles from "../assets/styles/Main-style";

function Main() {
  const classes = useStyles();
  const {main} = classes; 
  return (
    <section className={main}>
      <Form />
      <JobList />
    </section>
  );
}

export default memo(Main);
