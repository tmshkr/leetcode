const { maxDepth, TreeNode } = require("./solution.js");

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

test(`[3,9,20,null,null,15,7]`, () => {
  expect(maxDepth(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toEqual(3);
});

test(`[1,null,2]`, () => {
  expect(maxDepth(createBinaryTree([1, null, 2]))).toEqual(2);
});
