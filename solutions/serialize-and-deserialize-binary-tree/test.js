const { deserialize, serialize } = require("./code.js");
const {
  createBinaryTree,
  levelOrderTraversal,
} = require("../../src/utils/binary-tree.js");

function compare(res, spec) {
  expect(res.length).toEqual(spec.length);

  for (let i = 0; i < spec.length; i++) {
    expect(res[i]).toEqual(spec[i]);
  }
}

test(`[1,2,3,null,null,4,5]`, () => {
  const res = deserialize(
    serialize(createBinaryTree([1, 2, 3, null, null, 4, 5]))
  );
  compare(levelOrderTraversal(res), [1, 2, 3, null, null, 4, 5]);
});

test(`[]`, () => {
  const res = deserialize(serialize(createBinaryTree([])));
  compare(levelOrderTraversal(res), []);
});
