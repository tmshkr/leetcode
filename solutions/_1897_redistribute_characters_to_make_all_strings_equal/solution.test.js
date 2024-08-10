
const { makeEqual } = require("./solution.js");


test(`["abc","aabc","bc"]`, () => {
  const inputs = [["abc","aabc","bc"]];
  const expected = true;
  const actual = makeEqual(...inputs);
  expect(actual).toEqual(expected);
});

test(`["ab","a"]`, () => {
  const inputs = [["ab","a"]];
  const expected = false;
  const actual = makeEqual(...inputs);
  expect(actual).toEqual(expected);
});

