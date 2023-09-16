const { goodNodes, TreeNode } = require("./solution.js");

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

test(`[3,1,4,3,null,1,5]`, () => {
  expect(goodNodes(createBinaryTree([3, 1, 4, 3, null, 1, 5]))).toEqual(4);
});

test(`[3,3,null,4,2]`, () => {
  expect(goodNodes(createBinaryTree([3, 3, null, 4, 2]))).toEqual(3);
});

test(`[1]`, () => {
  expect(goodNodes(createBinaryTree([1]))).toEqual(1);
});
