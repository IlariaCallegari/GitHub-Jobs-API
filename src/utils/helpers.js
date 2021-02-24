//transform location into lowercase
const lowerCase = (str) => {
  if (typeof str === "string") {
    return str.toLowerCase();
  } else {
    return null;
  }
};

//break html at u21b5
const parseHTML = (str) => str.replace(/\u21B5/g, "<br/>");

//replace https:// with empty string
const parseURL = (str) => {
  if (str !== null) {
    return str.replace(/^(https?):\/\// , "").replace(/\/$/, "");
  } else {
    return "";
  }
};

export { lowerCase, parseHTML, parseURL };
