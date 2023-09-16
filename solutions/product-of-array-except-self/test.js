const { productExceptSelf } = require("./solution.js");

test(`[1,2,3,4]`, () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test(`[-1,1,0,-3,3]`, () => {
  const result = productExceptSelf([-1, 1, 0, -3, 3]);
  const spec = [0, 0, 9, 0, 0];
  // handle 0 === -0
  expect(result.length === spec.length).toBe(true);
  for (let i = 0; i < result.length; i++) {
    expect(result[i] === spec[i]).toBe(true);
  }
});
