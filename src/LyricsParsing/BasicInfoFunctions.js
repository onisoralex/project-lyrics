import * as Utils from "../Utilities/Utils.js";

/**
 * Searches for a keyword in a list of songparts and returns the index of that songpart of the array
 * @param {*} parts 
 * @param {*} keyWord 
 * @returns 
 */
const getIndexOfPart = (parts, keyWord) => {
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].name === keyWord) {
      return i;
    }
  }

  return -1;
};

/**
 * Checks if the info array contains a keyword fro the list of keywords and retrieves and returns the information from that line
 * @param {*} basicSongInformationArray
 * @param {*} keyWords
 * @returns
 */
const getInfoFromLine = (basicSongInformationArray, keyWords) => {
  let info = "";

  for (let i = 0; i < basicSongInformationArray.length; i++) {
    const oneLineArray = basicSongInformationArray[i].split(/:(.+)/);
    if (Utils.isInArray(oneLineArray[0].toLowerCase(), keyWords)) {
      info = oneLineArray[1].trim();
    }
  }

  return info;
};

/**
 * Checks if the basic information array contains a keyword from a list of keywords and if not returns an empty info object
 * @param {*} keyWords
 * @param {*} emptyInfo
 * @param {*} basicSongInformationArray
 * @returns
 */
const getBasicInfo = (keyWords, emptyInfo, basicSongInformationArray) => getInfoFromLine(basicSongInformationArray, keyWords) || emptyInfo;

export {
  getIndexOfPart,
  getInfoFromLine,
  getBasicInfo,
};
