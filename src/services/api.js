const CORS_URL = "https://api.allorigins.win/get?url=";
const API_URL = "https://jobs.github.com/positions.json?";

const fetchJobs = async (
  jobspec = {
    description: "software engineer",
    checked: true,
    location: "London",
  }
) =>
  fetch(
    `${CORS_URL}${encodeURIComponent(
      `${API_URL}description=${jobspec.description}&full_time=${jobspec.checked}&location=${jobspec.location}`
    )}`
  ).then((response) => {
    if (response.ok) return response.json();
    throw new Error("Network response was not ok.");
  });

export default fetchJobs;

