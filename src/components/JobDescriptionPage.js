import React, {memo} from "react";
import CompanyInfo from "./CompanyInfo";
import JobDescription from "./JobDescription";
import HowToApply from "./HowToApply";
import Footer from "../Parts/Footer/Footer"
import useStyles from "../styles/General-style";

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

export default memo(JobDescriptionPage);
