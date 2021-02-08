import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./Parts/Header/Header";
import Main from "./components/Main";
import useStyle from "./assets/styles/App-style";

const JOB_PER_PAGE = 12;
const MAX_JOB_PER_PAGE = 50;

function App() {
  //app state
  // const [pageParam, setPageParam] = useState(0);
  // const [error, setError] = useState("");

  //context
  const { isDark } = useContext(ThemeContext);

  // useEffect(() => {
  //   fetchJobs().then(
  //     (jobs) => {
  //       setJobs([...jobs]);
  //       checkIfLoaded();
  //     },
  //     (error) => {
  //       setError(error);
  //     }
  //   );
  // });

  //check if isLoaded
  // const checkIfLoaded = () => {
  //   if (jobs.length < MAX_JOB_PER_PAGE) {
  //     setIsLoaded(true);
  //   } else {
  //     setPageParam(pageParam + 1);
  //     setIsLoaded(false);
  //   }
  // };

  //style
  const classes = useStyle(isDark);
  const { app } = classes;

  return (
    <div className={app}>
      <Header />
      <Main/>
    </div>
  );
}

export { App, JOB_PER_PAGE, MAX_JOB_PER_PAGE };
