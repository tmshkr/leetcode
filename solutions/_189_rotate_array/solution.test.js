const { rotate } = require("./solution.js");

test(`[1,2,3,4,5,6,7],3`, () => {
  const inputs = [[1, 2, 3, 4, 5, 6, 7], 3];
  const expected = [5, 6, 7, 1, 2, 3, 4];
  rotate(...inputs);
  expect(inputs[0]).toEqual(expected);
});

test(`[-1,-100,3,99],2`, () => {
  const inputs = [[-1, -100, 3, 99], 2];
  const expected = [3, 99, -1, -100];
  rotate(...inputs);
  expect(inputs[0]).toEqual(expected);
});
