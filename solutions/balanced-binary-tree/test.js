const { isBalanced, TreeNode } = require("./code.js");

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
  expect(isBalanced(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toEqual(
    true
  );
});

test(`[1,2,2,3,3,null,null,4,4]`, () => {
  expect(
    isBalanced(createBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]))
  ).toEqual(false);
});

test(`[]`, () => {
  expect(isBalanced(createBinaryTree([]))).toEqual(true);
});
