
const { singleNonDuplicate } = require("./solution.js");


test(`[1,1,2,3,3,4,4,8,8]`, () => {
  const inputs = [[1,1,2,3,3,4,4,8,8]];
  const expected = 2;
  const actual = singleNonDuplicate(...inputs);
  expect(actual).toEqual(expected);
});

test(`[3,3,7,7,10,11,11]`, () => {
  const inputs = [[3,3,7,7,10,11,11]];
  const expected = 10;
  const actual = singleNonDuplicate(...inputs);
  expect(actual).toEqual(expected);
});

