const lowerCase = (str) => {
  if (typeof str === "string") {
    return str.toLowerCase();
  } else {
    return null;
  }
};

const parseHTML = (str) => str.replace(/\u21B5/g, "<br/>");
const parseURL = (str) => str.replace(/^(https?):\/\//, "");

export { lowerCase, parseHTML, parseURL };
