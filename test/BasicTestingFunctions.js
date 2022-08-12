// ====================================
// ========= Basic functions ==========
// ====================================

// Styling scripts
const greenstyle = "<span style=\"color: MediumSeaGreen;\"> ";
const redstyle = "<span style=\"background-color: Tomato; color: white;\">";
const bluestyle = "<span style=\"color: DodgerBlue;\"> ";
const closespan = "</span>";
const nextline = "<br>";

const testPass = (id, info) => `${id} ${greenstyle}PASS${closespan} ${typeof (info) === "undefined" ? "" : info}${nextline}`;

const testFail = (id, info) => `${id} ${redstyle}FAIL${closespan} ${typeof (info) === "undefined" ? "" : info}${nextline}`;

const testSkip = (id, info) => `${id} ${bluestyle}SKIP${closespan} ${typeof (info) === "undefined" ? "" : info}${nextline}`;

export {
  testPass,
  testFail,
  testSkip,
};
