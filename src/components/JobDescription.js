import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ButtonPrimary } from "./Buttons";
import useStyles from "../assets/styles/JobDescription-style";

function JobDescription({ jobSelected }) {
  const { title, location, type, description } = jobSelected;
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { container, position, jobDescription } = classes;
  return (
    <div className={container}>
      <div className={position}>
        <div>
          <p>
            <span>Time</span> • <span>{type}</span>{" "}
          </p>
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <ButtonPrimary text="Apply Now" />
      </div>
      <div className={jobDescription}>{description}</div>
    </div>
  );
}

export default JobDescription;
