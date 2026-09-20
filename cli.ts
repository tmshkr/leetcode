const yargs = require("yargs");
import * as fs from "fs";
import * as path from "path";
import { getQuestion } from "./src/getQuestion";
const { updateProblemList } = require("./src/updateProblemList");

// e.g., LEETCODE_LANGUAGES=typescript,python
// process.loadEnvFile needs node >= 20.12; the @types/node in node_modules
// is older than that, hence the cast.
const envFile = path.join(__dirname, ".env");
if (fs.existsSync(envFile)) {
  (process as any).loadEnvFile(envFile);
}

yargs
  .command(
    "update",
    "update the list of all leetcode problems (to reference by number)",
    {},
    updateProblemList
  )
  .command(
    "get <titleSlug|number>",
    "get a single leetcode problem",
    (yargs) => {
      yargs.positional("titleSlug|number", {
        describe:
          "the title slug or number of the problem to get, e.g., 'two-sum' or 1",
      });
      yargs.option("force", {
        alias: "f",
        type: "boolean",
        default: false,
        describe:
          "delete the existing solution folder and start over, discarding any work in it",
      });
    },
    getQuestion
  )
  .help().argv;
