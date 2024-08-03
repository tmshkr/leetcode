
const { countCharacters } = require("./solution.js");


test(`["cat","bt","hat","tree"],"atach"`, () => {
  const inputs = [["cat","bt","hat","tree"],"atach"];
  const expected = 6;
  const actual = countCharacters(...inputs);
  expect(actual).toEqual(expected);
});

test(`["hello","world","leetcode"],"welldonehoneyr"`, () => {
  const inputs = [["hello","world","leetcode"],"welldonehoneyr"];
  const expected = 10;
  const actual = countCharacters(...inputs);
  expect(actual).toEqual(expected);
});

