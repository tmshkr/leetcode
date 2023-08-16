const { isSameTree, TreeNode } = require("./code.js");

function createBinaryTree(levelOrderList) {
  if (!levelOrderList) {
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

test(`[1,2,3],[1,2,3]`, () => {
  expect(
    isSameTree(createBinaryTree([1, 2, 3]), createBinaryTree([1, 2, 3]))
  ).toEqual(true);
});

test(`[1,2],[1,null,2]`, () => {
  expect(
    isSameTree(createBinaryTree([1, 2]), createBinaryTree([1, null, 2]))
  ).toEqual(false);
});

test(`[1,2,1],[1,1,2]`, () => {
  expect(
    isSameTree(createBinaryTree([1, 2, 1]), createBinaryTree([1, 1, 2]))
  ).toEqual(false);
});
