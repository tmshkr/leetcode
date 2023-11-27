
const { canPlaceFlowers } = require("./solution.js");
  

test(`[1,0,0,0,1],1`, () => {
  const inputs = [[1,0,0,0,1],1];
  const expected = true;
  const actual = canPlaceFlowers(...inputs);
  expect(actual).toBe(expected);
});

test(`[1,0,0,0,1],2`, () => {
  const inputs = [[1,0,0,0,1],2];
  const expected = false;
  const actual = canPlaceFlowers(...inputs);
  expect(actual).toBe(expected);
});

