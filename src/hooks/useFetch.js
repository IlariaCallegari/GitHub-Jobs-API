import { useContext, useState } from "react";
import fetchJobs from "../services/api";
import { JobContext } from "../contexts/JobContext";

function useFetch(val) {
  const { setJobs, setIsLoading } = useContext(JobContext);
  const [error, setError] = useState(null);


export default useFetch;
