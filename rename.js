const fs = require("fs");
const path = require("path");
const { glob } = require("glob");

async function rename() {
  const files = await glob("**/code.*", { ignore: "**/__pycache__/**" });

  files.forEach((file) => {
    const oldFilePath = file;
    const [fileName, extension] = oldFilePath.split(".");
    const newFilePath = fileName.replace("code", "solution") + "." + extension;

    try {
      fs.renameSync(oldFilePath, newFilePath);
      console.log(`Renamed: ${oldFilePath} -> ${newFilePath}`);
    } catch (error) {
      console.error(`Error renaming ${oldFilePath}: ${error.message}`);
    }
  });
}

rename();
