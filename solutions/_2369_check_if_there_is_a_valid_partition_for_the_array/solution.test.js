
const { validPartition } = require("./solution.js");


test(`[4,4,4,5,6]`, () => {
  const inputs = [[4,4,4,5,6]];
  const expected = true;
  const actual = validPartition(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,1,1,2]`, () => {
  const inputs = [[1,1,1,2]];
  const expected = false;
  const actual = validPartition(...inputs);
  expect(actual).toEqual(expected);
});

