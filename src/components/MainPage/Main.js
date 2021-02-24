import React, { memo } from "react";
import Form from "./Form";
import JobList from "./JobList";

function Main() {
  return (
    <React.Fragment>
      <Form />
      <JobList />
    </React.Fragment>
  );
}

export default memo(Main);
