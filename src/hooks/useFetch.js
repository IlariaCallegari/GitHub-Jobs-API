import { useContext, useState } from "react";
import fetchJobs from "../services/api";
import { JobContext } from "../contexts/JobContext";

function useFetch() {
  const { setJobs, setIsLoading } = useContext(JobContext);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const myJobs = fetchJobs()
      .then((data) => {
        const jobs = JSON.parse(data.contents);
        setJobs(jobs);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });

      return myJobs; 
  };
}
export default useFetch;
