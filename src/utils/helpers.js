const lowerCase = (str) => {
  if (typeof str === "string") {
    return str.toLowerCase();
  } else {
    return null;
  }
};

export { lowerCase };
