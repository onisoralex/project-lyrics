const NUMBERS = {
  "B#": 1,
  C: 1,
  "C#": 2,
  Db: 2,
  D: 3,
  "D#": 4,
  Eb: 4,
  E: 5,
  Fb: 5,
  "E#": 6,
  F: 6,
  "F#": 7,
  Gb: 7,
  G: 8,
  "G#": 9,
  Ab: 9,
  A: 10,
  "A#": 11,
  Bb: 11,
  B: 12,
  Cb: 12,
};
Object.freeze(NUMBERS);

const NOTES = {
  NaN: "",
  1: "C",
  2: "C#",
  3: "D",
  4: "D#",
  5: "E",
  6: "F",
  7: "F#",
  8: "G",
  9: "G#",
  10: "A",
  11: "Bb",
  12: "B",
};
Object.freeze(NOTES);

const chordRegEx = /(^[A-G]|^[a-g])(#|b)?(m)?([1-9])?(sus2|sus4|sus|dim|aug)?/;
Object.freeze(chordRegEx);

export { NUMBERS, NOTES, chordRegEx };
