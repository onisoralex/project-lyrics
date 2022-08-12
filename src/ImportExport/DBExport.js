import { createFileDownloadLink } from "../Utilities/Utils.js";

const exportToDBFile = (obj, elementID) => {
  const element = document.getElementById(elementID);
  const filename = "export.JSON";
  createFileDownloadLink(obj, filename, element);
};

export { exportToDBFile };
