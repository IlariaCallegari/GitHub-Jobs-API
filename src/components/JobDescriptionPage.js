import React from "react";
import CompanyName from "./CompanyName";
import JobDescription from "./JobDescription";
import useStyles from "../assets/styles/General-style";

function JobDescriptionPage() {
    const classes = useStyles();
    const {general} = classes; 
  return (
    <div className={general}>
      <CompanyName />
      <JobDescription />
    </div>
  );
}

export default JobDescriptionPage;
