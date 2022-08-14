import * as Utils from "../Utilities/Utils.js";

// Replace the space (and eventual multiple trailing spaces) with a nonbreaking space
// It's the only solution to create fixed spaces. Will cause nonbreaking points in text.
// Could eventually be fixed with usage of CSS Grid-View
const makeLine = (chordsLine, lyricsLine, readableChords, type) => {
  let text = "";

  const space = "&nbsp;";
  const tripplespace = "&nbsp;&nbsp;&nbsp;";
  let preChord = "";
  const postChord = readableChords ? tripplespace : space;

  for (let i = 0; i < chordsLine.length; i++) {
    const a = chordsLine[i].getChordAsText();

    if (type === "combined") {
      const chordStart = chordsLine[i].getPosition();
      const chordEnd = (Utils.isLastElement(i, chordsLine)) ? lyricsLine.length : chordsLine[i + 1].getPosition();
      let b = lyricsLine.substring(chordStart, chordEnd);

      // If a block ends with a space remove trailing spaces and replace it with a non-breaking space
      if (b.at(-1) === " ") b = Utils.removeTrailingSpaces(b).concat("&nbsp;");

      // If a block starts with a space it should become a non-breaking space - relevant for Chords between words and at start of sentences
      if (b.at(0) === " ") {
        b = Utils.removeLeadingSpaces(b);
        b = `${chordStart === 0 ? tripplespace : space}${b}`;
      }

      // Offset the counter and display the text only
      // The first chord could start in the iddle of the sentence - first part of sentence should still be displayed
      if (i === 0 && chordStart !== 0) text += `<c-b t="">${lyricsLine.substring(0, chordStart)}</c-b>`;

      // If a block is empty it could be a chord after the end of a sentence (chordchanges without singing) - make some spaces between the chords
      // Undefined is for the instrumentals that have no lyrics
      if (b === "" || b === undefined) {
        b = tripplespace;
        preChord = tripplespace;
      }

      text += `<c-b t="${preChord}${a}${postChord}">${b}</c-b>`;
    }
    if (type === "chords") {
      // Special treatment for Solo and Intrumentals
      text += `<c-b t="${a}${tripplespace}" class="song-text-no-line-height">${space}</c-b>`;
    }
  }

  text += "<br>";

  return text;
};

const makeTextLine = (lyricsLine) => {
  let text = "";

  text += `<c-b t="">${lyricsLine}</c-b>`;
  text += "<br>";

  return text;
};

const makeText = (parts, readableChords) => {
  let text = "";
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const { codedChords, lyrics } = part;

    text += `<div class="js-song__part-container">`;
    text += `<div class="js-song__part-name--visible"><strong>${part.name}</strong><br></div>`;
    if (part.type === "lyrics") {
      for (let j = 0; j < lyrics.length; j++) {
        const chordsLine = undefined;
        const lyricsLine = lyrics[j];
        text += makeTextLine(lyricsLine);
      }
    } else {
      for (let j = 0; j < codedChords.length; j++) {
        const chordsLine = codedChords[j];
        // The lyrics line still has to be undefined even if the part doesn't have lyrics
        // Else it will be interpreted as chords at the end of a sentence that have no text
        // -- What did I mean by this? Have to read the code again to nderstand and document better
        const lyricsLine = (lyrics === undefined) ? undefined : lyrics[j];
        text += makeLine(chordsLine, lyricsLine, readableChords, part.type);
      }
    }
    text += `</div>`;
  }

  return text;
};

const createText = (song, readableChords) => {
  let display = "";

  display += `<div id="js-song__title"><h2>${song.getTitle()}</h2></div>`;
  display += `<div id="js-song__artist"><strong>Artist:</strong> ${song.getArtist()}</div>`;
  display += `<div id="js-song__defaultKey"><strong>Default Key:</strong> ${song.getDefaultKey()}</div>`;
  display += `<div id="js-song__currentKey"><strong>Current Key:</strong> ${song.getKey()}</div>`;
  display += `<div id="js-song__tempo"><strong>Tempo:</strong> ${song.getTempo()}</div>`;
  display += `<div id="js-song__defaultStructure"><strong>Default Structure:</strong> ${song.getDefaultStructure()}</div>`;
  display += `<div id="js-song__text"><br>${makeText(song.songParts, readableChords)}<br></div>`;

  return display;
};

export { createText };
