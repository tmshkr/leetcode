const { isSubtree, TreeNode } = require("./solution.js");

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

test(`[3,4,5,1,2],[4,1,2]`, () => {
  expect(
    isSubtree(createBinaryTree([3, 4, 5, 1, 2]), createBinaryTree([4, 1, 2]))
  ).toEqual(true);
});

test(`[3,4,5,1,2,null,null,null,null,0],[4,1,2]`, () => {
  expect(
    isSubtree(
      createBinaryTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
      createBinaryTree([4, 1, 2])
    )
  ).toEqual(false);
});
