const { checkInclusion } = require("./code.js");

test(`"ab","eidbaooo"`, () => {
  expect(checkInclusion("ab","eidbaooo")).toEqual(true);
});

test(`"ab","eidboaoo"`, () => {
  expect(checkInclusion("ab","eidboaoo")).toEqual(false);
});

