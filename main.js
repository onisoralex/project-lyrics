import { openAndDisplayFile } from "./src/Utilities/Utils.js";
import { parseSongFromText } from "./src/LyricsParsing/LyricsParsing.js";
import { createText } from "./src/SongtextDisplay/Transformer.js";
import * as Import from "./src/ImportExport/DBImport.js";
import * as Export from "./src/ImportExport/DBExport.js";
import * as FileLoader from "./src/Utilities/FileLoader.js";
import * as ErrorTexts from "./src/Texts/errorsTexts.js";

window.openAndDisplayFile = openAndDisplayFile; // TODO: WHY IS THIS NOT ASYNC/AWAIT???????? All other file loader functions (import & addSong) have the async/await added.
window.parseSongFromText = parseSongFromText;
window.songCollection = [];

window.start = () => {};

window.addSong = async (event) => {
  const betterReadableChords = false; // If true ensures a certain minimal extra distance between chords to make them more readable. Can cause words to be split, if chord changes happen too close together, eve though normally splitting of words wouldnn't be necessary.
  let songText;
  let song;

  try {
    songText = await FileLoader.getFileText(event);
  } catch (e) {
    alert(ErrorTexts.getFileNotLoaded(e));
  }

  try {
    song = parseSongFromText(songText);
    window.songCollection.push(song);
  } catch (e) {
    alert(ErrorTexts.getSomethingWrong(e));
  }

  document.getElementById("song-text__output").innerHTML = createText(song, betterReadableChords);
};

// Import has to be done in 2 steps because of how async/await works (await automatically returns the Promise object, making it impossible to return the necessary Object later)
window.import = async (event) => {
  const importedText = await FileLoader.getFileText(event);

  try {
    console.log("before");
    JSON.parse(importedText);
    window.songCollection = Import.transformIntoSongObjectArray(importedText);
  } catch (e) {
    alert(ErrorTexts.getWrongFileErrorText(e));
  }
};

window.exportDownload = () => {
  Export.exportToFile(window.songCollection);
};
