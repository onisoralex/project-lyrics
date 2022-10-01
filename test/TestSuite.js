import * as BasicInfoTests from "./BasicInfoTests/BasicInfoTests.js";
import * as ProcessingTests from "./ProcessingTests/ProcessingTests.js";
import * as ChordTests from "./ChordTests.js";

window.init = () => {
  window.result = "";
  window.resultfield = document.getElementById("result");
  window.song = document.getElementById("songtext").innerHTML;
};

window.setResult = () => {
  window.resultfield.innerHTML = window.result;
};

window.execTests = (res) => {
  let result = res;

  result += "<hr>";

  // Basic Tests
  result += BasicInfoTests.getSongTitleTest(1);
  result += BasicInfoTests.getArtistTest(2);
  result += BasicInfoTests.getDefaultSongKeyTest(3);
  result += BasicInfoTests.getDefaultSongStructureTest(4);

  result += "<hr>";

  // Processing Tests
  result += ProcessingTests.extractAndPrepareInformationFromEditorTest(5, window.song);
  result += ProcessingTests.createTextAndChordsTest(6);
  result += ProcessingTests.searchAndGetLyricsPartsTest(7);
  result += ProcessingTests.getStartingPositionOfPartsTest(8);
  result += ProcessingTests.extractPartsTest(9);

  result += "<hr>";

  // Chord Object Test
  result += ChordTests.doTests();

  window.result = result;
};
