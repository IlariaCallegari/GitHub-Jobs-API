import React, { memo } from "react";
import CompanyInfo from "./CompanyInfo";
import JobDescription from "./JobDescription";
import HowToApplyBox from "./HowToApplyBox";
import Footer from "../../Parts/Footer/Footer";

function JobDescriptionPage({ jobSelected }) {
  return (
    <React.Fragment>
      <CompanyInfo jobSelected={jobSelected} />
      <JobDescription jobSelected={jobSelected} />
      <HowToApplyBox jobSelected={jobSelected} />
      <Footer jobSelected={jobSelected} />
    </React.Fragment>
  );
}

export default memo(JobDescriptionPage);
