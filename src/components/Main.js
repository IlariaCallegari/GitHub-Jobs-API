import React, {memo} from "react";
import Form from "./Form";
import JobList from "./JobList"
import useStyles from "../assets/styles/General-style";

function Main() {
  const classes = useStyles();
  const {general} = classes; 
  return (
    <section className={general}>
      <Form />
      <JobList />
    </section>
  );
}

export default memo(Main);
