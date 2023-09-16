const fs = require("fs");
const { glob } = require("glob");

async function rename() {
  const files = await glob("**/code.*", { ignore: "**/__pycache__/**" });

  files.forEach((file) => {
    const [fileName, extension] = file.split(".");
    const newFilePath = fileName.replace("code", "solution") + "." + extension;
    const testFilePath = fileName.replace("code", "test") + "." + extension;

    try {
      const updatedTest = fs
        .readFileSync(testFilePath, "utf8")
        .replace("code", "solution");
      fs.writeFileSync(testFilePath, updatedTest, "utf8");
      fs.renameSync(file, newFilePath);
      console.log(`Renamed: ${file} -> ${newFilePath}`);
    } catch (error) {
      console.error(`Error renaming ${file}: ${error.message}`);
    }
  });
}

rename();
