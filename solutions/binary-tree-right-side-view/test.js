const { rightSideView, TreeNode } = require("./code.js");

function createBinaryTree(levelOrderList) {
  if (!levelOrderList.length) {
    return null;
  }

  const root = new TreeNode(levelOrderList[0]);
  const q = [root];
  let index = 1;

  while (q && index < levelOrderList.length) {
    const node = q.shift();

    const leftVal = levelOrderList[index];
    if (leftVal !== null) {
      node.left = new TreeNode(leftVal);
      q.push(node.left);
    }
    index++;

    if (index < levelOrderList.length) {
      const rightVal = levelOrderList[index];
      if (rightVal !== null) {
        node.right = new TreeNode(rightVal);
        q.push(node.right);
      }
      index++;
    }
  }
  return root;
}

test(`[1,2,3,null,5,null,4]`, () => {
  const res = rightSideView(createBinaryTree([1, 2, 3, null, 5, null, 4]));
  const spec = [1, 3, 4];

  expect(res.length).toEqual(spec.length);
  for (let i = 0; i < spec.length; i++) {
    expect(res[i]).toEqual(spec[i]);
  }
});

test(`[1,null,3]`, () => {
  const res = rightSideView(createBinaryTree([1, null, 3]));
  const spec = [1, 3];

  expect(res.length).toEqual(spec.length);
  for (let i = 0; i < spec.length; i++) {
    expect(res[i]).toEqual(spec[i]);
  }
});

test(`[]`, () => {
  const res = rightSideView(createBinaryTree([]));
  const spec = [];

  expect(res.length).toEqual(spec.length);
});
