import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { JobProvider } from "./contexts/JobContext";

import "./index.css";

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
