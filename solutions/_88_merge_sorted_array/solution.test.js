const { merge } = require("./solution.js");

test(`[1,2,3,0,0,0],3,[2,5,6],3`, () => {
  const inputs = [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3];
  const nums1 = inputs[0];
  const expected = [1, 2, 2, 3, 5, 6];
  merge(...inputs);
  expect(nums1).toEqual(expected);
});

test(`[1],1,[],0`, () => {
  const inputs = [[1], 1, [], 0];
  const nums1 = inputs[0];
  const expected = [1];
  merge(...inputs);
  expect(nums1).toEqual(expected);
});

test(`[0],0,[1],1`, () => {
  const inputs = [[0], 0, [1], 1];
  const nums1 = inputs[0];
  const expected = [1];
  merge(...inputs);
  expect(nums1).toEqual(expected);
});
