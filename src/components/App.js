import useStyles from "../styles/App-style"
import Navbar from "./Navbar"

function App() {
  const classes = useStyles();
  const {app} = classes; 
  return (
    <div className={app}>
      <Navbar />
    </div>
  );
}

export default App;
