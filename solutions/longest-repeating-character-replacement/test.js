const { characterReplacement } = require("./solution.js");

test(`"ABAB",2`, () => {
  expect(characterReplacement("ABAB",2)).toEqual(4);
});

test(`"AABABBA",1`, () => {
  expect(characterReplacement("AABABBA",1)).toEqual(4);
});

