import * as Utils from "../Utilities/Utils.js";
import { searchAndGetLyricsPartsAndChordLines } from "./SongPartSeparation.js";
import { getSongWithTransformedChords } from "./ChordTransformation.js";
import { getSongFromParsedText } from "./ObjectifySongArray.js";
import Song from "../DataClasses/Song.js";

/**
 * Converts a textfile to an array with every line as an element in the array. New lines, carriage return characters and empty lines are removed
 * @param {String} completeSongText String of the whole songtext - plus additional information - from a textfile
 * @returns An Array with all lines of the text file
 */
const convertTextToArray = (completeSongText) => {
  const arr = Utils.textToArray(completeSongText);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr.splice(i, 1);
      i -= 1; // Check same line in case of repeating empty lines
    }
  }

  return arr;
};

const parseSongFromText = (completeSongText) => {
  const songLinesArray = convertTextToArray(completeSongText);
  const songDividedInDifferentParts = searchAndGetLyricsPartsAndChordLines(songLinesArray); // Gets the different Parts of a Song
  const songWithTransformedChordsAsArray = getSongWithTransformedChords(songDividedInDifferentParts);
  const song = new Song(getSongFromParsedText(songWithTransformedChordsAsArray));

  return song;
};

export { parseSongFromText };
