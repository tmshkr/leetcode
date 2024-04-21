const { rob } = require("./solution.js");
const { createBinaryTree } = require("./test_helpers/binary-tree");

test(`[3,2,3,null,3,null,1]`, () => {
  const inputs = [[3, 2, 3, null, 3, null, 1]];
  const expected = 7;
  const root = createBinaryTree(...inputs);
  const actual = rob(root);
  expect(actual).toEqual(expected);
});

test(`[3,4,5,1,3,null,1]`, () => {
  const inputs = [[3, 4, 5, 1, 3, null, 1]];
  const expected = 9;
  const root = createBinaryTree(...inputs);
  const actual = rob(root);
  expect(actual).toEqual(expected);
});
