
const { removeDuplicates } = require("./solution.js");


test(`"abcd",2`, () => {
  const inputs = ["abcd", 2];
  const expected = "abcd";
  const actual = removeDuplicates(...inputs);
  expect(actual).toEqual(expected);
});

test(`"deeedbbcccbdaa",3`, () => {
  const inputs = ["deeedbbcccbdaa", 3];
  const expected = "aa";
  const actual = removeDuplicates(...inputs);
  expect(actual).toEqual(expected);
});

test(`"pbbcggttciiippooaais",2`, () => {
  const inputs = ["pbbcggttciiippooaais", 2];
  const expected = "ps";
  const actual = removeDuplicates(...inputs);
  expect(actual).toEqual(expected);
});

