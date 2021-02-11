import React, { memo, useContext } from "react";
import ReactTimeAgo from "react-time-ago";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import useStyles from "../assets/styles/Job-style";

function Job({ date, type, companyLogo, title, location, company, id }) {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { jobBox, logo, jobType, jobTitle, companyName, place } = classes;
  return (
    <div className={jobBox}>
      <div>
        <img className={logo} src={companyLogo} alt={`${company} logo`} />
      </div>
      <div className={jobType}>
        <span>
          <ReactTimeAgo date={date} locale="en-US" />
        </span>{" "}
        • <span>{type}</span>
      </div>
      <div>
        <NavLink to={`/job-description/${id}`}>
          <a className={jobTitle} href>
            {title}
          </a>
        </NavLink>
      </div>
      <div className={companyName}>{company}</div>
      <div className={place}>{location}</div>
    </div>
  );
}

export default memo(Job);
