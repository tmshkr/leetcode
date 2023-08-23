const { kthSmallest, TreeNode } = require("./code.js");

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

test(`[3,1,4,null,2],1`, () => {
  expect(kthSmallest(createBinaryTree([3, 1, 4, null, 2]), 1)).toEqual(1);
});

test(`[5,3,6,2,4,null,null,1],3`, () => {
  expect(
    kthSmallest(createBinaryTree([5, 3, 6, 2, 4, null, null, 1]), 3)
  ).toEqual(3);
});
