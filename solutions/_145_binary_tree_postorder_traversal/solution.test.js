const { postorderTraversal, TreeNode } = require("./solution.js");

function createBinaryTree(levelOrderList) {
  if (!levelOrderList || levelOrderList.length === 0) {
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

test(`[1,null,2,3]`, () => {
  const actual = postorderTraversal(createBinaryTree([1, null, 2, 3]));
  const expected = [3, 2, 1];
  expect(actual).toEqual(expected);
});

test(`[]`, () => {
  const actual = postorderTraversal(createBinaryTree([]));
  const expected = [];
  expect(actual).toEqual(expected);
});

test(`[1]`, () => {
  const actual = postorderTraversal(createBinaryTree([1]));
  const expected = [1];
  expect(actual).toEqual(expected);
});
