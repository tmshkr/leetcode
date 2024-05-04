const { longestDiverseString } = require("./solution.js");

test(`1,1,7`, () => {
  const inputs = [1, 1, 7];
  const expected = "ccaccbcc";
  const actual = longestDiverseString(...inputs);
  expect(actual).toEqual(expected);
});

test(`7,1,0`, () => {
  const inputs = [7, 1, 0];
  const expected = "aabaa";
  const actual = longestDiverseString(...inputs);
  expect(actual).toEqual(expected);
});
