const { findBottomLeftValue } = require("./solution.js");
const { createBinaryTree } = require("../test_helpers/binary-tree.js");

test(`[2,1,3]`, () => {
  const inputs = [[2, 1, 3]];
  const expected = 1;
  const root = createBinaryTree(inputs[0]);
  const actual = findBottomLeftValue(root);
  expect(actual).toEqual(expected);
});

test(`[1,2,3,4,null,5,6,null,null,7]`, () => {
  const inputs = [[1, 2, 3, 4, null, 5, 6, null, null, 7]];
  const expected = 7;
  const root = createBinaryTree(inputs[0]);
  const actual = findBottomLeftValue(root);
  expect(actual).toEqual(expected);
});
