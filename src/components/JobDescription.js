import React, { useContext } from "react";
import useStyles from "../assets/styles/JobDescription-style";
import { ThemeContext } from "../contexts/ThemeContext";

function JobDescription() {
  const { isDark } = useContext(ThemeContext);
  const classes = useStyles(isDark);
  const { container } = classes;
  return (
    <div className={container}>
      <div>
        <h1>Job Title</h1>
      </div>
    </div>
  );
}

export default JobDescription;
