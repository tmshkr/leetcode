const { diameterOfBinaryTree, TreeNode } = require("./code.js");

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

test(`[1,2,3,4,5]`, () => {
  expect(diameterOfBinaryTree(createBinaryTree([1, 2, 3, 4, 5]))).toEqual(3);
});

test(`[1,2]`, () => {
  expect(diameterOfBinaryTree(createBinaryTree([1, 2]))).toEqual(1);
});
