const getWrongFileErrorText = (e) => `Wrong file format!\n\n${e}`;

const getSomethingWrong = (e) => `Something is wrong with the songfile!\nCheck console for more infos.\n\n${e}`;

const getFileNotLoaded = (e) => `Could not load file!\n\n${e}`;

export {
  getWrongFileErrorText,
  getSomethingWrong,
  getFileNotLoaded,
};
