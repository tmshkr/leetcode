const yargs = require("yargs");
import { getQuestion } from "./src/getQuestion";
const { updateProblemList } = require("./src/updateProblemList");

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
    },
    getQuestion
  )
  .help().argv;
