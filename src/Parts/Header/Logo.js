import React, {memo} from "react";
import logo from "../../assets/desktop/logo.svg";

function Logo() {
  return (
    <div>
      <img src={logo} alt="devJobs Logo" />
    </div>
  );
}

export default memo(Logo); 