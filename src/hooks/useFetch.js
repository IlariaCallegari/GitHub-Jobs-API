import {useState, useCallback } from "react";
import request from "../services/api";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback((urlparams) => {
    request(urlparams)
    .then((res) => {
      const jobs = JSON.parse(res.contents);
      setData(jobs);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
    });
  }, [setIsLoading, setData, setError])

  return [fetchData, data, setData, isLoading, setIsLoading, error, setError]
}

export default useFetch;
