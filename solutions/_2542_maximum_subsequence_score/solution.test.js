
const { maxScore } = require("./solution.js");


test(`[1,3,3,2],[2,1,3,4],3`, () => {
  const inputs = [[1,3,3,2],[2,1,3,4],3];
  const expected = 12;
  const actual = maxScore(...inputs);
  expect(actual).toEqual(expected);
});

test(`[4,2,3,1,1],[7,5,10,9,6],1`, () => {
  const inputs = [[4,2,3,1,1],[7,5,10,9,6],1];
  const expected = 30;
  const actual = maxScore(...inputs);
  expect(actual).toEqual(expected);
});

