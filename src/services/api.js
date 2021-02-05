const CORS_URL = "https://allorigins.win/";
const API_URL = "https://jobs.github.com/positions.json?";
// const CORS_URL = "https://cors-anywhere.herokuapp.com/";

const fetchJobs = async ({ ...jobspec }, pageState) => {
  try {
    await fetch(
      `${CORS_URL}${API_URL}page=${pageState}&description=${jobspec.description}&full_time=${jobspec.checked}&location=${jobspec.location}`
    ).then((res) => res.json());
  } catch (error) {
    throw error;
  }
};

export { fetchJobs };
