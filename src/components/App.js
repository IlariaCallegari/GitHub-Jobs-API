import useStyles from "../styles/App-style";
import Navbar from "./Navbar";
import SearchInputs from "./SearchInputs";
import JobList from "./JobList";

function App() {
  const classes = useStyles();
  const { app, container } = classes;
  return (
    <div className={app}>
      <Navbar />
      <div className={container}>
        <SearchInputs />
        <JobList />
      </div>
    </div>
  );
}

export default App;
