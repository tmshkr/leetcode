const { LockingTree } = require("./solution.js");

test(`LockingTree`, () => {
  const lockingTree = new LockingTree([-1, 0, 0, 1, 1, 2, 2]);

  expect(lockingTree.lock(2, 2)).toEqual(true);
  expect(lockingTree.unlock(2, 3)).toEqual(false);
  expect(lockingTree.unlock(2, 2)).toEqual(true);
  expect(lockingTree.lock(4, 5)).toEqual(true);
  expect(lockingTree.upgrade(0, 1)).toEqual(true);
  expect(lockingTree.lock(0, 1)).toEqual(false);
});
