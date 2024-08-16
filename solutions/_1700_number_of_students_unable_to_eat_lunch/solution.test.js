const { countStudents } = require("./solution.js");

test(`[1,1,0,0],[0,1,0,1]`, () => {
  const inputs = [
    [1, 1, 0, 0],
    [0, 1, 0, 1],
  ];
  const expected = 0;
  const actual = countStudents(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,1,1,0,0,1],[1,0,0,0,1,1]`, () => {
  const inputs = [
    [1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 1],
  ];
  const expected = 3;
  const actual = countStudents(...inputs);
  expect(actual).toEqual(expected);
});
