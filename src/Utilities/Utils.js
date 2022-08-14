const deepCopy = (inputObject) => {
  if (typeof inputObject !== "object" || inputObject === null) {
    return inputObject; // Return the value if input is not an object
  }

  const outputObject = Array.isArray(inputObject) ? [] : {};

  for (const key in inputObject) {
    const value = inputObject[key];
    outputObject[key] = deepCopy(value);
  }

  return outputObject;
};

const isIterateable = (o) => o.toString().match(/[0-9]+/) !== null;

const isLastElement = (i, e) => i === e.length - 1;

const textToArray = (text) => (text.replace(/\r/g, "")).split("\n"); // Also delete all the Carriage Return Characters in the File to be able to see the Linebreaks

const openAndDisplayFile = (eventNode, fileTarget) => {
  const input = eventNode.target; // Takes Information from the HTML element that executed this Script
  const fileReader = new FileReader(); // Create a new File Reader
  const targetNode = fileTarget;

  fileReader.onload = () => {
    targetNode.innerText = fileReader.result; // Reads the Lyrics from the Object and display them
  };

  fileReader.readAsText(input.files[0]); // Reads first File from Array
};
const createFileDownloadLink = (obj, filename, element) => {
  const mimeType = "text/plain";
  const downloadlinkElement = element;
  const content = JSON.stringify(obj);
  const theFile = new Blob([content], { type: mimeType });

  downloadlinkElement.href = URL.createObjectURL(theFile);
  downloadlinkElement.download = filename;
};

const showElement = (elementID) => document.getElementById(elementID).classList.remove("hidden-element");

const hideElement = (elementID) => document.getElementById(elementID).classList.add("hidden-element");

const getIndexInArrayStartingFrom = (needle, haystack, n) => haystack.indexOf(needle, n);

const isInArray = (needle, haystack) => haystack.some((e) => e === needle); // Can also be done as haystack.some(e => e === needle)

const splitLineIntoArray = (line) => line.split(" ").filter((e) => e);

const removeTrailingSpaces = (text) => `${text.trimEnd()}`;

const removeLeadingSpaces = (text) => `${text.trimStart()}`;

export {
  deepCopy,
  isIterateable,
  isLastElement,
  textToArray,
  openAndDisplayFile,
  createFileDownloadLink,
  showElement,
  hideElement,
  getIndexInArrayStartingFrom,
  isInArray,
  splitLineIntoArray,
  removeTrailingSpaces,
  removeLeadingSpaces,
};
