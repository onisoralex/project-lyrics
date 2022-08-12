import * as Utils from "../Utilities/Utils.js";

const getIndexOfPart = (parts, keyWord) => {
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].name === keyWord) {
      return i;
    }
  }

  return -1;
};

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

const getBasicInfo = (keyWords, emptyInfo, basicSongInformationArray) => getInfoFromLine(basicSongInformationArray, keyWords) || emptyInfo;

export {
  getIndexOfPart,
  getInfoFromLine,
  getBasicInfo,
};
