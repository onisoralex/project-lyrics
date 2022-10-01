import Chord from "../src/DataClasses/Chord.js";
import * as BasicTestingFunctions from "./BasicTestingFunctions.js";

const test = () => {
// Chord Object Test
  let a = "";
  a += `${((new Chord(5, "G", "#", "m", 7, "sus4", "D").getChordAsText() === "G#m7sus4/D") ? BasicTestingFunctions.testPass(1, "Chord Test") : BasicTestingFunctions.testFail(1, "Chord Test"))}`;
  a += `${((new Chord(5, "B", "#", "m", 7, "sus2", "Chord Test").getChordAsText() === "Cm7sus2") ? BasicTestingFunctions.testPass(2, "Chord Test") : BasicTestingFunctions.testFail(2, "Chord Test"))}`;
  a += `${((new Chord(5, "F", "b", "m", 7, "dim", "D").getChordAsText() === "Em7dim/D") ? BasicTestingFunctions.testPass(3, "Chord Test") : BasicTestingFunctions.testFail(3, "Chord Test"))}`;
  a += `${((new Chord(5, "G", "#", "", 7, "", "D").getChordAsText() === "G#7/D") ? BasicTestingFunctions.testPass(4, "Chord Test") : BasicTestingFunctions.testFail(4, "Chord Test"))}`;
  a += `${((new Chord(5, "g", "#", "m", 0, "aug", "D").getChordAsText() === "G#maug/D") ? BasicTestingFunctions.testPass(5, "Chord Test") : BasicTestingFunctions.testFail(5, "Chord Test"))}`;
  a += `${((new Chord(5, "g", "", "", 0, "", "Chord Test").getChordAsText() === "Gm") ? BasicTestingFunctions.testPass(6, "Chord Test") : BasicTestingFunctions.testFail(6, "Chord Test"))}`;
  a += `${((new Chord(5, "G#m7sus4/D").getChordAsText() === "G#m7sus4/D") ? BasicTestingFunctions.testPass(7, "Chord Test") : BasicTestingFunctions.testFail(7, "Chord Test"))}`;
  a += `${((new Chord(5, "Cm7sus2").getChordAsText() === "Cm7sus2") ? BasicTestingFunctions.testPass(8, "Chord Test") : BasicTestingFunctions.testFail(8, "Chord Test"))}`;
  a += `${((new Chord(5, "Em7dim/d").getChordAsText() === "Em7dim/D") ? BasicTestingFunctions.testPass(9, "Chord Test") : BasicTestingFunctions.testFail(9, "Chord Test"))}`;
  a += `${((new Chord(5, "g#7/D").getChordAsText() === "G#m7/D") ? BasicTestingFunctions.testPass(10, "Chord Test") : BasicTestingFunctions.testFail(10, "Chord Test"))}`;
  a += `${((new Chord(5, "G#maug/D").getChordAsText() === "G#maug/D") ? BasicTestingFunctions.testPass(11, "Chord Test") : BasicTestingFunctions.testFail(11, "Chord Test"))}`;
  a += `${((new Chord(5, "Gm").getChordAsText() === "Gm") ? BasicTestingFunctions.testPass(12, "Chord Test") : BasicTestingFunctions.testFail(12, "Chord Test"))}`;
  a += `${((new Chord(5, "G#m7sus4/D").transpose(5).getChordAsText() === "C#m7sus4/G") ? BasicTestingFunctions.testPass(13, "Chord Test") : BasicTestingFunctions.testFail(13, "Chord Test"))}`;
  a += `${((new Chord(5, "G#m7sus4/D").transpose(-4).getChordAsText() === "Em7sus4/Bb") ? BasicTestingFunctions.testPass(14, "Chord Test") : BasicTestingFunctions.testFail(14, "Chord Test"))}`;
  a += `${((new Chord(5, "G#m7sus4/D").transpose(12).getChordAsText() === "G#m7sus4/D") ? BasicTestingFunctions.testPass(15, "Chord Test") : BasicTestingFunctions.testFail(15, "Chord Test"))}`;

  return a;
};

export {
  test,
};
