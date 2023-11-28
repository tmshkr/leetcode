
const { majorityElement } = require("./solution.js");
  

test(`[3,2,3]`, () => {
  const inputs = [[3,2,3]];
  const expected = 3;
  const actual = majorityElement(...inputs);
  expect(actual).toBe(expected);
});

test(`[2,2,1,1,1,2,2]`, () => {
  const inputs = [[2,2,1,1,1,2,2]];
  const expected = 2;
  const actual = majorityElement(...inputs);
  expect(actual).toBe(expected);
});

