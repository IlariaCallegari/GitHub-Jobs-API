import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { JobProvider } from "./contexts/JobContext";
import TimeAgo from "javascript-time-ago";
import "./index.css";

import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(en);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <JobProvider>
        <App />
      </JobProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
