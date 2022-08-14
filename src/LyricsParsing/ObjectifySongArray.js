import Chord from "../DataClasses/Chord.js";

const copyChordsOfPart = (chordLines) => {
  const chords = [];

  for (let i = 0; i < chordLines.length; i++) {
    const chordLine = chordLines[i];
    const newChordLine = [];

    for (let j = 0; j < chordLine.length; j++) {
      const chord = chordLine[j];
      newChordLine.push(new Chord(chord.getPosition(), chord.getChordAsText()));
    }

    chords.push(newChordLine);
  }

  return chords;
};

const copyChordsOfImportedPart = (chordLines) => {
  const chords = [];

  for (let i = 0; i < chordLines.length; i++) {
    const chordLine = chordLines[i]; // Contains an Array
    const newChordLine = [];

    for (let j = 0; j < chordLine.length; j++) {
      const chord = chordLine[j]; // Contains an Object
      newChordLine.push(new Chord(chord.position, chord.noteNumber, "", chord.minMaj, chord.extraNoteNumber, chord.special, chord.slashNoteNumber));
    }

    chords.push(newChordLine);
  }

  return chords;
};

const getSongPartFromParsedText = (songArrayPart) => {
  const o = {};

  o.name = songArrayPart.name;
  o.type = songArrayPart.type;
  o.lyrics = songArrayPart.lyrics;
  o.codedChords = (o.type === "lyrics") ? songArrayPart.codedChords : copyChordsOfPart(songArrayPart.transformedChords.codedChords);

  return o;
};

const getSongPartFromImportedText = (songArrayPart) => {
  const o = {};

  o.name = songArrayPart.name;
  o.type = songArrayPart.type;
  o.lyrics = songArrayPart.lyrics;
  o.codedChords = copyChordsOfImportedPart(songArrayPart.codedChords);

  return o;
};

const getSongFromParsedText = (songArray) => {
  const o = {};
  o.artist = songArray.artist;
  o.defaultKey = songArray.defaultKey;
  o.key = songArray.key;
  o.defaultStructure = songArray.defaultStructure;
  o.tempo = songArray.tempo;
  o.title = songArray.title;

  // const iterator = (songArray.songParts) ? songArray.songParts.length : songArray.length;
  if (songArray.songParts) {
    o.songParts = [];
    for (let i = 0; i < songArray.songParts.length; i++) {
      o.songParts.push(getSongPartFromImportedText(songArray.songParts[i]));
    }
  } else {
    o.songParts = [];
    for (let i = 0; i < songArray.length; i++) {
      o.songParts.push(getSongPartFromParsedText(songArray[i]));
    }
  }

  return o;
};

export { getSongFromParsedText };
