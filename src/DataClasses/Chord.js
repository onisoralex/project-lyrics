import { NUMBERS, NOTES, chordRegEx } from "../Utilities/Constants.js";

class Chord {
  constructor(_position, _note, _sharpFlat, _minMaj, _extraNoteNumber, _special, _slashNote) {
    if (_sharpFlat === undefined
      && _minMaj === undefined
      && _extraNoteNumber === undefined
      && _special === undefined
      && _slashNote === undefined) {
      const chord = _note;
      const [mainChord, slashChord] = chord.split("/").map((e) => e || "");
      const matches = mainChord.match(chordRegEx);
      // let codedChord;

      if (matches === null || matches === undefined) {
        throw new Error(`Invalid chord found! (${chord}) Delete this chord!`);
      } else {
        matches.shift(); // Remove first element which is the complete match found. We only need the match groups.
        const cleanMatches = matches.map((e) => e || "");
        // codedChord = new Chord(matches[0], matches[1], matches[2], matches[3], matches[4], slashChord, _position);

        this.position = _position; // Position in the text
        this.noteNumber = Chord.noteToNumber(cleanMatches[0].toUpperCase() + cleanMatches[1]);
        this.minMaj = Chord.majorOrMinor(cleanMatches[0], cleanMatches[2]); // duh...
        this.extraNoteNumber = cleanMatches[3]; // The 7 in a G7
        this.special = cleanMatches[4]; // The "sus" in Gsus, "sus2" in a Gsus2, "sus4" in Gsus4, "dim" in Gdim or "dim7" in Gdim7
        this.slashNoteNumber = (slashChord === undefined) ? 0 : Chord.noteToNumber(slashChord.toUpperCase()); // The F# in a D/F#
      }
    } else {
      this.position = _position; // Position in the text
      this.noteNumber = (typeof _note === "number") ? _note : Chord.noteToNumber(_note.toUpperCase() + _sharpFlat);
      this.minMaj = (typeof _note === "number") ? _minMaj : Chord.majorOrMinor(_note, _minMaj); // duh...
      this.extraNoteNumber = _extraNoteNumber; // The 7 in a G7
      this.special = _special; // The "sus" in Gsus, "sus2" in a Gsus2, "sus4" in Gsus4, "dim" in Gdim or "dim7" in Gdim7
      this.slashNoteNumber = (typeof _slashNote === "number") ? _slashNote : (_slashNote === "") ? 0 : Chord.noteToNumber(_slashNote.toUpperCase()); // The F# in a D/F#
    }
  }

  // Destructive transpose
  transpose(ammount) {
    this.noteNumber = (this.noteNumber + ammount) % 12;
    this.noteNumber += (this.noteNumber <= 0) ? 12 : 0;

    this.slashNoteNumber = (this.slashNoteNumber + ammount) % 12;
    this.slashNoteNumber += (this.slashNoteNumber <= 0) ? 12 : 0;
    return this;
  }

  // Am = min, am = min, a = min, A = maj
  static majorOrMinor(note, minMaj) {
    if (minMaj === "m") return minMaj;
    return (note.toLowerCase() === note) ? "m" : "";
  }

  static noteToNumber(note) {
    return note === undefined ? "" : NUMBERS[note];
  }

  // Getters/Setters
  getPosition() {
    return this.position;
  }

  getNoteNumber() {
    return this.noteNumber;
  }

  getMinMaj() {
    return this.minMaj;
  }

  getExtraNoteNumber() {
    return this.extraNoteNumber;
  }

  getSpecial() {
    return this.special;
  }

  getSlashNoteNumber() {
    return this.slashNoteNumber;
  }

  setPosition(position) {
    this.position = position;
  }

  setNoteNumber(noteNumber) {
    this.noteNumber = noteNumber;
  }

  setMinMaj(minMaj) {
    this.minMaj = minMaj;
  }

  setExtraNoteNumber(extraNoteNumber) {
    this.extraNoteNumber = extraNoteNumber;
  }

  setSpecial(special) {
    this.special = special;
  }

  setSlashNoteNumber(slashNoteNumber) {
    this.slashNoteNumber = slashNoteNumber;
  }

  // Special Getters/Setters
  getChordAsText() {
    const extraNoteNumber = this.extraNoteNumber === 0 ? "" : this.extraNoteNumber;
    const slashNoteNumberString = ((this.slashNoteNumber === 0) ? "" : "/") + NOTES[this.slashNoteNumber];
    return `${NOTES[this.noteNumber]}${this.minMaj}${extraNoteNumber}${this.special}${slashNoteNumberString}`;
  }
}

export { Chord as default };
