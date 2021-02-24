import { memo, useContext } from "react";
import { JobContext } from "../../contexts/JobContext";
import List from "./List";
import Button from "../Button";
import Loader from "../Loader";
import NoJobsFound from "../NoJobs";
import useStyles from "../../styles/JobList-style.js";

function JobList() {
  const { numClick, setNumClick, displayedJobs, data, isLoading } = useContext(
    JobContext
  );
  const classes = useStyles();
  const { container } = classes;

  return (
    <div className={container}>
      {isLoading ? <Loader /> : <List />}
      {!isLoading && displayedJobs.length === 0 && <NoJobsFound />}
      {!isLoading && displayedJobs.length !== data.length && (
        <Button
          text="Load More"
          handleclick={() => setNumClick(numClick + 1)}
        />
      )}
    </div>
  );
}

export default memo(JobList);
