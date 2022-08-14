import Chord from "../DataClasses/Chord.js";
import * as Utils from "../Utilities/Utils.js";

const getSingleChords = (chordsToTransformArray) => {
  const chords = [];

  for (let i = 0; i < chordsToTransformArray.length; i++) {
    chords.push(Utils.splitLineIntoArray(chordsToTransformArray[i]));
  }

  return chords;
};

const searchChordPositionsOfPartArray = (chordsArray, singleChordsArray) => {
  if (chordsArray.length !== singleChordsArray.length) {
    throw new Error(`Length of ${chordsArray} and ${singleChordsArray} is not the same!`);
  }

  const chordPositionsOfPart = [];

  for (let i = 0; i < singleChordsArray.length; i++) { // Line by line
    let currentStartPosition = 0;
    const chordPositionArray = [];

    for (let j = 0; j < singleChordsArray[i].length; j++) { // Chord by chord
      currentStartPosition = Utils.getIndexInArrayStartingFrom(singleChordsArray[i][j], chordsArray[i], currentStartPosition);
      chordPositionArray.push(currentStartPosition);
    }

    chordPositionsOfPart.push(chordPositionArray);
  }

  return chordPositionsOfPart;
};

const transformChordsIntoCoding = (singleChordsOfPartArray, chordPositionsOfPartArray) => {
  const codedChordsOfPart = [];

  for (let i = 0; i < singleChordsOfPartArray.length; i++) {
    const chordsOfLine = singleChordsOfPartArray[i];
    const codedChordsOfLine = [];

    for (let j = 0; j < chordsOfLine.length; j++) {
      codedChordsOfLine.push(new Chord(chordPositionsOfPartArray[i][j], chordsOfLine[j]));
    }

    codedChordsOfPart.push(codedChordsOfLine);
  }

  return codedChordsOfPart;
};

const getSongWithTransformedChords = (separatedAndProcessedSongArray) => {
  const parts = Utils.deepCopy(separatedAndProcessedSongArray);

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].type !== "lyrics") {
      const tc = [];
      tc.singleChords = getSingleChords(parts[i].chords);
      tc.chordPositions = searchChordPositionsOfPartArray(parts[i].chords, tc.singleChords);
      tc.codedChords = transformChordsIntoCoding(tc.singleChords, tc.chordPositions);
      parts[i].transformedChords = tc;
    }
  }

  return parts;
};

export { getSongWithTransformedChords };
