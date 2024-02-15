
const { minimizeMax } = require("./solution.js");


test(`[10,1,2,7,1,3],2`, () => {
  const inputs = [[10,1,2,7,1,3],2];
  const expected = 1;
  const actual = minimizeMax(...inputs);
  expect(actual).toEqual(expected);
});

test(`[4,2,1,2],1`, () => {
  const inputs = [[4,2,1,2],1];
  const expected = 0;
  const actual = minimizeMax(...inputs);
  expect(actual).toEqual(expected);
});

