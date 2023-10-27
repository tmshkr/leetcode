const { isNStraightHand } = require("./solution.js");

test(`[1,2,3,6,2,3,4,7,8],3`, () => {
  expect(isNStraightHand([1,2,3,6,2,3,4,7,8],3)).toEqual(true);
});

test(`[1,2,3,4,5],4`, () => {
  expect(isNStraightHand([1,2,3,4,5],4)).toEqual(false);
});

