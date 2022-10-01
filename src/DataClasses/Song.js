import * as Utils from "../Utilities/Utils.js";
import Chord from "./Chord.js";
import { NUMBERS, NOTES } from "../Utilities/Constants.js";

class Song {
  constructor(song) {
    this.artist = song.artist;
    this.defaultKey = song.defaultKey;
    this.key = this.defaultKey;
    this.defaultStructure = song.defaultStructure;
    this.tempo = song.tempo;
    this.title = song.title;
    this.songParts = song.songParts;
    this.intro = song.intro;
  }

  transposeChords(ammount) {
    // Can be simplified a bit, but is currently necessary to be done like this, because deepCopy of the whole song doesn't copy Chord objects
    const newSong = new Song(Utils.deepCopy(this));

    for (let i = 0; i < this.songParts.length; i++) {
      if (this.songParts[i].type === "lyrics") {
        // If there are no chords no transpose needed
      } else {
        const originalSongPart = this.songParts[i];
        const newSongPart = newSong.songParts[i];
        for (let j = 0; j < originalSongPart.codedChords.length; j++) {
          const originalChordsLine = originalSongPart.codedChords[j];
          const newChordsLine = newSongPart.codedChords[j];
          for (let k = 0; k < originalChordsLine.length; k++) {
            const originalChord = originalChordsLine[k];
            const newChord = new Chord(originalChord.position, originalChord.getChordAsText()).transpose(ammount);
            newChordsLine[k] = newChord;
          }
        }
      }
    }

    return newSong;
  }

  transpose(ammount) {
    const newSong = this.transposeChords(ammount);

    const key = newSong.getKey();
    const keynumber = NUMBERS[key];
    const newkeynumber = keynumber + ammount;
    newSong.setKey(NOTES[newkeynumber]);

    return newSong;
  }

  // Normalizes a song to have all chords as if the key is in C. Thus the chord numbers are based on the actual song key (1 in the key of A is A, 3 in the key of A = B); Used for storage to store all songs in C
  normalizeChordsForSaving() {
    const ammountToTranspose = (NUMBERS[this.defaultKey] - 1) * -1;
    return this.transposeChords(ammountToTranspose);
  }

  // Normalizes a stored song to be displayed in the correct key
  normalizeChordsForDisplaying() {
    const ammountToTranspose = NUMBERS[this.defaultKey] - 1;
    return this.transposeChords(ammountToTranspose);
  }

  // Getters/Setters
  getArtist() {
    return this.artist;
  }

  getDefaultKey() {
    return this.defaultKey;
  }

  getKey() {
    return this.key;
  }

  getDefaultStructure() {
    return this.defaultStructure;
  }

  getTempo() {
    return this.tempo;
  }

  getTitle() {
    return this.title;
  }

  getSongParts() {
    return this.songParts;
  }

  getChord(songPart, chordLine, chord) {
    return this.songParts[songPart].codedChords[chordLine][chord];
  }

  setArtist(artist) {
    this.artist = artist;
  }

  setDefaultKey(key) {
    this.defaultKey = key;
  }

  setKey(key) {
    this.key = key;
  }

  setDefaultStructure(defaultStructure) {
    this.defaultStructure = defaultStructure;
  }

  setTempo(tempo) {
    this.tempo = tempo;
  }

  setTitle(title) {
    this.title = title;
  }

  setSongParts(songParts) {
    this.songParts = songParts;
  }

  // Special Getters/Setters
  setChordWithNewPosition(songPart, chordLine, chord, position, newChord) {
    this.songParts[songPart].codedChords[chordLine][chord] = new Chord(position, newChord.getChordAsText());
  }

  setChordWithOldPosition(songPart, chordLine, chord, newChord) {
    const c = this.songParts[songPart].codedChords[chordLine][chord];
    this.setChordWithNewPosition(songPart, chordLine, chord, c.getPosition(), newChord);
  }
}

export { Song as default };
