const { trimBST } = require("./solution.js");
const {
  converTreeToList,
  createBinaryTree,
} = require("../test_helpers/binary-tree.js");

test(`[1,0,2],1,2`, () => {
  const inputs = [[1, 0, 2], 1, 2];
  const expected = [1, null, 2];
  const root = createBinaryTree(inputs[0]);
  const actual = trimBST(root, ...inputs.slice(1));
  expect(converTreeToList(actual)).toEqual(expected);
});

test(`[3,0,4,null,2,null,null,1],1,3`, () => {
  const inputs = [[3, 0, 4, null, 2, null, null, 1], 1, 3];
  const expected = [3, 2, null, 1];
  const root = createBinaryTree(inputs[0]);
  const actual = trimBST(root, ...inputs.slice(1));
  expect(converTreeToList(actual)).toEqual(expected);
});
