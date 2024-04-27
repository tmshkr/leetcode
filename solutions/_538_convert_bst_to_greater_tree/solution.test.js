const {
  converTreeToList,
  createBinaryTree,
} = require("../test_helpers/binary-tree.js");
const { convertBST } = require("./solution.js");

test(`[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]`, () => {
  const inputs = [
    [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8],
  ];
  const expected = [
    30,
    36,
    21,
    36,
    35,
    26,
    15,
    null,
    null,
    null,
    33,
    null,
    null,
    null,
    8,
  ];
  const root = createBinaryTree(...inputs);
  const actual = convertBST(root);
  expect(converTreeToList(actual)).toEqual(expected);
});

test(`[0,null,1]`, () => {
  const inputs = [[0, null, 1]];
  const expected = [1, null, 1];
  const root = createBinaryTree(...inputs);
  const actual = convertBST(root);
  expect(converTreeToList(actual)).toEqual(expected);
});
