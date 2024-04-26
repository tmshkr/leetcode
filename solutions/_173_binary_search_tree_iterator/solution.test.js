const { BSTIterator } = require("./solution.js");
const { createBinaryTree } = require("../test_helpers/binary-tree.js");

test(`BSTIterator`, () => {
  const itr = new BSTIterator(createBinaryTree([7, 3, 15, null, null, 9, 20]));

  expect(itr.next()).toEqual(3);
  expect(itr.next()).toEqual(7);
  expect(itr.hasNext()).toEqual(true);
  expect(itr.next()).toEqual(9);
  expect(itr.hasNext()).toEqual(true);
  expect(itr.next()).toEqual(15);
  expect(itr.hasNext()).toEqual(true);
  expect(itr.next()).toEqual(20);
  expect(itr.hasNext()).toEqual(false);
});
