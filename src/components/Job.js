import React, { memo, useContext } from "react";
import TimeAgo from "timeago-react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import useStyles from "../styles/Job-style";
import imagePlaceHolder from "../assets/desktop/imagePlaceholder.svg";

function Job({ created_at, type, company_logo, title, location, company, id }) {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { jobBox, logo, jobType, jobTitle, companyName, place } = classes;
  return (
    <div className={jobBox}>
      <div className={logo}>
        <img
          src={company_logo !== null ? company_logo : imagePlaceHolder}
          alt={`${company} logo`}
        />
      </div>
      <NavLink to={`/job-description/${id}`}>
        <div className={jobType}>
          <span>
            <TimeAgo datetime={created_at} />
          </span>
          • <span>{type}</span>
        </div>
        <div>
          <h1 className={jobTitle}>{title}</h1>
        </div>
        <div className={companyName}>{company}</div>
        <div className={place}>{location}</div>
      </NavLink>
    </div>
  );
}

export default memo(Job);
