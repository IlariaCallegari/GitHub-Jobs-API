import {useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import useStyles from "../styles/noJobsFound-style";

function NoJobsFound() {
  const {isDark} = useContext(ThemeContext)
  const classes = useStyles(isDark);
  const {noJobsFound} = classes; 
  return (
    <div className={noJobsFound}>
      <h1>Sorry, no jobs found.</h1>
      <p>Change your search terms.</p>
    </div>
  );
}

export default NoJobsFound;
