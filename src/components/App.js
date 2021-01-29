import useStyles from "../styles/App-style";
import Navbar from "./Navbar";
import SearchInputs from "./SearchInputs";

function App() {
  const classes = useStyles();
  const { app, container} = classes;
  return (
    <div className={app}>
      <Navbar />
      <div className={container}>
        <SearchInputs />
      </div>
    </div>
  );
}

export default App;
