
const { isIsomorphic } = require("./solution.js");
  

test(`"egg","add"`, () => {
  const inputs = ["egg","add"];
  const expected = true;
  const actual = isIsomorphic(...inputs);
  expect(actual).toBe(expected);
});

test(`"foo","bar"`, () => {
  const inputs = ["foo","bar"];
  const expected = false;
  const actual = isIsomorphic(...inputs);
  expect(actual).toBe(expected);
});

test(`"paper","title"`, () => {
  const inputs = ["paper","title"];
  const expected = true;
  const actual = isIsomorphic(...inputs);
  expect(actual).toBe(expected);
});

