import React from "react";
import CompanyInfo from "./CompanyInfo";
import JobDescription from "./JobDescription";
import useStyles from "../assets/styles/General-style";

function JobDescriptionPage() {
    const classes = useStyles();
    const {general} = classes; 
  return (
    <div className={general}>
      <CompanyInfo />
      <JobDescription />
    </div>
  );
}

export default JobDescriptionPage;
