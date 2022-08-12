import * as BasicTestingFunctions from "../BasicTestingFunctions.js";
import {
  getSongTitle,
  getArtist,
  getDefaultSongKey,
  getDefaultSongStructure,
} from "../../src/BasicInfoFunctions.js";

// ====================================
// ============== Tests ===============
// ====================================

const getSongTitleTest = (id) => {
  const testdata = ["", "", "Title: testtitle", "", " "];
  const expected = "testtitle";
  const given = getSongTitle(testdata, testdata.length);

  return given === expected ? BasicTestingFunctions.testPass(id, "Songtext") : BasicTestingFunctions.testFail(id, "Songtext");
};

const getArtistTest = (id) => {
  const testdata = ["asd", "", " ", "Artist: artistname", " ", "", "dsasd"];
  const expected = "artistname";
  const given = getArtist(testdata, testdata.length);

  return given === expected ? BasicTestingFunctions.testPass(id, "Artist") : BasicTestingFunctions.testFail(id, "Artist");
};

const getDefaultSongKeyTest = (id) => {
  const testdata = ["asd", "", " ", "Key: G#", " ", "", "dsasd"];
  const expected = "G#";
  const given = getDefaultSongKey(testdata, testdata.length);

  return given === expected ? BasicTestingFunctions.testPass(id, "Key") : BasicTestingFunctions.testFail(id, "Key");
};

const getDefaultSongStructureTest = (id) => {
  const testdata = ["ölölä", " ", "", "\n", "Struktur: V1, Ch x 2, V2, Ch x 2, Solo, Br, Ch x 2, Outro x 2", "", " ", "asd"];
  const expected = "V1, Ch x 2, V2, Ch x 2, Solo, Br, Ch x 2, Outro x 2";
  const given = getDefaultSongStructure(testdata);

  return given === expected ? BasicTestingFunctions.testPass(id, "Songstructure") : BasicTestingFunctions.testFail(id, "Songstructure");
};

export {
  getSongTitleTest,
  getArtistTest,
  getDefaultSongKeyTest,
  getDefaultSongStructureTest,
};
