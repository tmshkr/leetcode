
const { containsNearbyDuplicate } = require("./solution.js");


test(`[1,2,3,1],3`, () => {
  const inputs = [[1, 2, 3, 1], 3];
  const expected = true;
  const actual = containsNearbyDuplicate(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,0,1,1],1`, () => {
  const inputs = [[1, 0, 1, 1], 1];
  const expected = true;
  const actual = containsNearbyDuplicate(...inputs);
  expect(actual).toEqual(expected);
});

test(`[1,2,3,1,2,3],2`, () => {
  const inputs = [[1, 2, 3, 1, 2, 3], 2];
  const expected = false;
  const actual = containsNearbyDuplicate(...inputs);
  expect(actual).toEqual(expected);
});

