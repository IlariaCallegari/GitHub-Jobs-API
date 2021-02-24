const CORS_URL = "https://api.allorigins.win/get?url=";
const API_URL = "https://jobs.github.com/positions.json?";

const request = async (
  urlparams = {
    description: "software engineer",
    checked: true,
    location: "remote",
  }
) =>
  await fetch(
    `${CORS_URL}${encodeURIComponent(
      `${API_URL}description=${urlparams.description}&full_time=${urlparams.checked}&location=${urlparams.location}`
    )}`
  ).then((response) => {
    if (response.ok) return response.json();
    throw new Error("Network response was not ok.");
  });

export default request;