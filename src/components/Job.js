import React from "react";
import useStyles from "../styles/Job-style";
import ReactTimeAgo from "react-time-ago";

function Job(props) {
  const { date, type, companyLogo, title, location, company } = props;
  const classes = useStyles();
  const { jobBox, logo, jobType, jobTitle, companyName, place } = classes;
  return (
    <div className={jobBox}>
      <div>
        <img className={logo} src={companyLogo} alt={`${company} logo`} />
      </div>
      <div className={jobType}>
        <span><ReactTimeAgo date={date} locale="en-us"/></span> • <span>{type}</span>
      </div>
      <div className={jobTitle}>{title}</div>
      <div className={companyName}>{company}</div>
      <div className={place}>{location}</div>
    </div>
  );
}

export default Job;
