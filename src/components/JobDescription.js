import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import useStyles from "../assets/styles/JobDescription-style";
import { parseHTML } from "../utils/helpers";
import ReactTimeAgo from "react-time-ago/commonjs/ReactTimeAgo";
import getUrls from "get-urls";

function JobDescription({ jobSelected }) {
  const {
    title,
    location,
    type,
    description,
    created_at,
    how_to_apply,
  } = jobSelected;
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { container, position, jobDescription, button } = classes;
  const urlSet = getUrls(how_to_apply);
  const getUrl = () => {
    for (let u of urlSet) {
      return u;
    }
  };
  return (
    <div className={container}>
      <div className={position}>
        <div>
          <p>
            <span>
              <ReactTimeAgo date={created_at} locale="en-us" />
            </span>{" "}
            • <span>{type}</span>{" "}
          </p>
          <h2>{title}</h2>
          <p>{location}</p>
        </div>
        <a className={button} href={getUrl()}>
          Apply Now
        </a>
      </div>
      <div
        className={jobDescription}
        dangerouslySetInnerHTML={{ __html: parseHTML(description) }}
      ></div>
    </div>
  );
}

export default JobDescription;
