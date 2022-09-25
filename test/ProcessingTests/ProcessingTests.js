import * as BasicTestingFunctions from "../BasicTestingFunctions.js";
import { SongPartSeparation } from "../../src/LyricsParsing/SongPartSeparation.js";

// ====================================
// ============== Tests ===============
// ====================================

const info = "test";

const extractAndPrepareInformationFromEditorTest = (id, song) => {
  const regex = "Where Would I Be Without You";
  const expected = true;
  const given = (song.match(regex).index !== 0); // Check if the regex value exists

  return expected === given ? BasicTestingFunctions.testPass(id, info) : BasicTestingFunctions.testFail(id, info);
};

// Not yet tested - maybe not testable, since it's a function that uses many other yet untested functions
const createTextAndChordsTest = (id) => BasicTestingFunctions.testSkip(id, info); // TODO

// Not yet tested - maybe not testable, since it's a function that uses many other yet untested functions
const searchAndGetLyricsPartsTest = (id) => BasicTestingFunctions.testSkip(id, info); // TODO

const getStartingPositionOfPartsTest = (id) => {
  const testdata = "\r\n\r\n[Chor]\r\ntestchor\r\n\r\n[Vers]\r\nteststrophe\r\n\r\n asdasd";
  const cleanedTestdata = (testdata.replace(/\r/g, "")).split("\n"); // Delete all the Carriage Return Characters
  const expected = JSON.stringify([2, 5]);
  const given = JSON.stringify(SongPartSeparation.getStartingPositionsOfParts(cleanedTestdata));

  return expected === given ? BasicTestingFunctions.testPass(id, info) : BasicTestingFunctions.testFail(id, info);
};

// Not yet tested - maybe not testable, since it's a function that uses many other yet untested functions
const extractPartsTest = (id) => BasicTestingFunctions.testSkip(id, info);

export {
  extractAndPrepareInformationFromEditorTest,
  createTextAndChordsTest,
  searchAndGetLyricsPartsTest,
  getStartingPositionOfPartsTest,
  extractPartsTest,
};
