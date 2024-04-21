const { createBinaryTree } = require("./test_helpers/binary-tree");
const { flipEquiv } = require("./solution.js");

test(`[1,2,3,4,5,6,null,null,null,7,8],[1,3,2,null,6,4,5,null,null,null,null,8,7]`, () => {
  const inputs = [
    [1, 2, 3, 4, 5, 6, null, null, null, 7, 8],
    [1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7],
  ];
  const expected = true;
  const root1 = createBinaryTree(inputs[0]);
  const root2 = createBinaryTree(inputs[1]);
  const actual = flipEquiv(root1, root2);
  expect(actual).toEqual(expected);
});

test(`[],[]`, () => {
  const inputs = [[], []];
  const expected = true;
  const root1 = createBinaryTree(inputs[0]);
  const root2 = createBinaryTree(inputs[1]);
  const actual = flipEquiv(root1, root2);
  expect(actual).toEqual(expected);
});

test(`[],[1]`, () => {
  const inputs = [[], [1]];
  const expected = false;
  const root1 = createBinaryTree(inputs[0]);
  const root2 = createBinaryTree(inputs[1]);
  const actual = flipEquiv(root1, root2);
  expect(actual).toEqual(expected);
});
