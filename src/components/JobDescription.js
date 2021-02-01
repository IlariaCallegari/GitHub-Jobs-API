import React from "react";
import useStyles from "../styles/JobDescription-style";

function JobDescription(){
    const classes = useStyles();
    const {jobDescription} = classes; 
    return (
        <div className={jobDescription}>
            <h1>JobDescription</h1>
        </div>
    )
}

export default JobDescription;