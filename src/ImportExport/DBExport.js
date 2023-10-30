import { createFileDownloadLink } from "../Utilities/Utils.js";

const exportToFile = (obj) => {
  const filename = "export.JSON";
  const url = createFileDownloadLink(obj);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export { exportToFile };
