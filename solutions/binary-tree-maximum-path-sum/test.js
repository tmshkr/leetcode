const { maxPathSum } = require("./code.js");
const { createBinaryTree } = require("../../src/utils/binary-tree.js");

test(`[1,2,3]`, () => {
  expect(maxPathSum(createBinaryTree([1, 2, 3]))).toEqual(6);
});

test(`[-10,9,20,null,null,15,7]`, () => {
  expect(maxPathSum(createBinaryTree([-10, 9, 20, null, null, 15, 7]))).toEqual(
    42
  );
});
