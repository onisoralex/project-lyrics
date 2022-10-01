import * as Utils from "./src/Utilities/Utils.js";
import { parseSongFromText } from "./src/LyricsParsing/LyricsParsing.js";
import { createText } from "./src/SongtextDisplay/Transformer.js";
import * as Import from "./src/ImportExport/DBImport.js";
import * as Export from "./src/ImportExport/DBExport.js";
import * as FileLoader from "./src/Utilities/FileLoader.js";

window.openAndDisplayFile = Utils.openAndDisplayFile;
window.parseSongFromText = parseSongFromText;
window.songCollection = [];

window.export = () => {
  const downloadLinkID = "download-link";
  Export.exportToDBFile(window.songCollection, downloadLinkID);
  Utils.showElement(downloadLinkID);
};

// Import has to be done in 2 steps because of how async/await works (await automatically returns the Promise object, making it impossible to return the necessary Object later)
window.import = async (event) => {
  const importedText = await FileLoader.getFileText(event);
  window.songCollection = Import.transformIntoSongObjectArray(importedText);
};

window.start = () => {};

window.addSong = async (event) => {
  const ouputNode = document.getElementById("song-text__output"); // Gets the Place where the Lyrics should go in the HTML
  const readableChords = false; // If true ensures a certain minimal distance between chords to ammke them more readable. Can cause chords words to be split, if chord changes happen too close together
  let songText;
  let song;
  try {
    songText = await FileLoader.getFileText(event);
  } catch (e) {
    alert("Could not load file!");
  }
  try {
    song = parseSongFromText(songText);
    window.songCollection.push(song);
  } catch (e) {
    alert("Something is wrong with the songfile!\nCheck console for more infos.");
  }

  ouputNode.innerHTML = createText(song, readableChords);
};
