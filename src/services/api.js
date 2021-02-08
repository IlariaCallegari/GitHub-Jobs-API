// const CORS_URL = "https://allorigins.win/";
const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://jobs.github.com/positions.json?";

const fetchJobs = async ({ ...jobspec }) => {
  try {
    await fetch(
      `${CORS_URL}${API_URL}&description=${jobspec.description}&full_time=${jobspec.checked}&location=${jobspec.location}`
    ).then((res) => res.json());
  } catch (error) {
    throw error;
  }
};

export { fetchJobs };
