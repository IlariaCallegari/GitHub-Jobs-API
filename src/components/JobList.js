import React, { memo, useContext } from "react";
import { JobContext } from "../contexts/JobContext";
import List from "./List";
import Button from "./Button";
import useStyles from "../assets/styles/JobList-style.js";

function JobList() {
  const { numClick, setNumClick, isLoaded } = useContext(JobContext);
  
  const classes = useStyles();
  const { container } = classes;

  return (
    <div className={container}>
      <List />
      {!isLoaded && (
        <Button
          text="Load More"
          handleclick={() => setNumClick(numClick + 1)}
        />
      )}
    </div>
  );
}

export default memo(JobList);
