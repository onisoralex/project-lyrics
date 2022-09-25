import * as BasicTestingFunctions from "../BasicTestingFunctions.js";
import { getBasicInfo } from "../../src/LyricsParsing/BasicInfoFunctions.js";

// ====================================
// ============== Tests ===============
// ====================================

const getSongTitleTest = (id) => {
  const testdata = ["", "", "Title: testtitle", "", " "];
  const expected = "testtitle";
  const given = getBasicInfo(["title", "name", "nume", "titlu"], "Unknown Song Title", testdata);

  return given === expected ? BasicTestingFunctions.testPass(id, "Songtext") : BasicTestingFunctions.testFail(id, "Songtext");
};

const getArtistTest = (id) => {
  const testdata = ["asd", "", " ", "Artist: artistname", " ", "", "dsasd"];
  const expected = "artistname";
  const given = getBasicInfo(["artist", "interpret"], "Unknown Artist", testdata);

  return given === expected ? BasicTestingFunctions.testPass(id, "Artist") : BasicTestingFunctions.testFail(id, "Artist");
};

const getDefaultSongKeyTest = (id) => {
  const testdata = ["asd", "", " ", "Key: G#", " ", "", "dsasd"];
  const expected = "G#";
  const given = getBasicInfo(["key", "gama", "gamă"], "Unknown Key", testdata);

  return given === expected ? BasicTestingFunctions.testPass(id, "Key") : BasicTestingFunctions.testFail(id, "Key");
};

const getDefaultSongStructureTest = (id) => {
  const testdata = ["ölölä", " ", "", "\n", "Struktur: V1, Ch x 2, V2, Ch x 2, Solo, Br, Ch x 2, Outro x 2", "", " ", "asd"];
  const expected = "V1, Ch x 2, V2, Ch x 2, Solo, Br, Ch x 2, Outro x 2";
  const given = getBasicInfo(["structure", "struktur", "structura", "structură"], "No structure given", testdata);

  return given === expected ? BasicTestingFunctions.testPass(id, "Songstructure") : BasicTestingFunctions.testFail(id, "Songstructure");
};

export {
  getSongTitleTest,
  getArtistTest,
  getDefaultSongKeyTest,
  getDefaultSongStructureTest,
};
