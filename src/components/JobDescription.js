import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";
import useStyles from "../assets/styles/JobDescription-style";
import { parseHTML } from "../utils/helpers";
import ReactTimeAgo from "react-time-ago/commonjs/ReactTimeAgo";

function JobDescription({ jobSelected }) {
  const { title, location, type, description, created_at } = jobSelected;
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { container, position, jobDescription } = classes;
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
        <Button text="Apply Now" />
      </div>
      <div
        className={jobDescription}
        dangerouslySetInnerHTML={{ __html: parseHTML(description) }}
      ></div>
    </div>
  );
}

export default JobDescription;
