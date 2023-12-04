
const { wordPattern } = require("./solution.js");
  

test(`"abba","dog cat cat dog"`, () => {
  const inputs = ["abba","dog cat cat dog"];
  const expected = true;
  const actual = wordPattern(...inputs);
  expect(actual).toEqual(expected);
});

test(`"abba","dog cat cat fish"`, () => {
  const inputs = ["abba","dog cat cat fish"];
  const expected = false;
  const actual = wordPattern(...inputs);
  expect(actual).toEqual(expected);
});

test(`"aaaa","dog cat cat dog"`, () => {
  const inputs = ["aaaa","dog cat cat dog"];
  const expected = false;
  const actual = wordPattern(...inputs);
  expect(actual).toEqual(expected);
});

