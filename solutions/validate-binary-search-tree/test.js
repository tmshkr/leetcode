const { isValidBST, TreeNode } = require("./solution.js");

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

test(`[2,1,3]`, () => {
  expect(isValidBST(createBinaryTree([2, 1, 3]))).toEqual(true);
});

test(`[5,1,4,null,null,3,6]`, () => {
  expect(isValidBST(createBinaryTree([5, 1, 4, null, null, 3, 6]))).toEqual(
    false
  );
});
