
const { calPoints } = require("./solution.js");


test(`["5","2","C","D","+"]`, () => {
  const inputs = [["5", "2", "C", "D", "+"]];
  const expected = 30;
  const actual = calPoints(...inputs);
  expect(actual).toEqual(expected);
});

test(`["5","-2","4","C","D","9","+","+"]`, () => {
  const inputs = [["5", "-2", "4", "C", "D", "9", "+", "+"]];
  const expected = 27;
  const actual = calPoints(...inputs);
  expect(actual).toEqual(expected);
});

test(`["1","C"]`, () => {
  const inputs = [["1", "C"]];
  const expected = 0;
  const actual = calPoints(...inputs);
  expect(actual).toEqual(expected);
});

