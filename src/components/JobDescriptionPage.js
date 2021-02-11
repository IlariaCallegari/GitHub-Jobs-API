import React from "react";
import CompanyInfo from "./CompanyInfo";
import JobDescription from "./JobDescription";
import useStyles from "../assets/styles/General-style";
import HowToApply from "./HowToApply";
import Footer from "../Parts/Footer/Footer"

function JobDescriptionPage({jobSelected}) {
    const classes = useStyles();
    const {general} = classes; 
    
  return (
    <div className={general}>
      <CompanyInfo jobSelected={jobSelected}/>
      <JobDescription jobSelected={jobSelected}/>
      <HowToApply jobSelected={jobSelected}/>
      <Footer jobSelected={jobSelected}/>
    </div>
  );
}

export default JobDescriptionPage;
