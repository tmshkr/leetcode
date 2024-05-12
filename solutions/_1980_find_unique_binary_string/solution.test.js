const { findDifferentBinaryString } = require("./solution.js");

test(`["01","10"]`, () => {
  const inputs = [["01", "10"]];
  const expected = ["00", "11"];
  const actual = findDifferentBinaryString(...inputs);
  expect(expected).toContain(actual);
});

test(`["00","01"]`, () => {
  const inputs = [["00", "01"]];
  const expected = ["10", "11"];
  const actual = findDifferentBinaryString(...inputs);
  expect(expected).toContain(actual);
});

test(`["111","011","001"]`, () => {
  const inputs = [["111", "011", "001"]];
  const expected = ["101", "000", "010", "100", "110"];
  const actual = findDifferentBinaryString(...inputs);
  expect(expected).toContain(actual);
});
