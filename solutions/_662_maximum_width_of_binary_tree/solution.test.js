const { widthOfBinaryTree, TreeNode } = require("./solution.js");

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

test(`[1,3,2,5,3,null,9]`, () => {
  const inputs = [[1, 3, 2, 5, 3, null, 9]];
  const expected = 4;
  const root = createBinaryTree(inputs[0]);
  const actual = widthOfBinaryTree(root);
  expect(actual).toEqual(expected);
});

test(`[1,3,2,5,null,null,9,6,null,7]`, () => {
  const inputs = [[1, 3, 2, 5, null, null, 9, 6, null, 7]];
  const expected = 7;
  const root = createBinaryTree(inputs[0]);
  const actual = widthOfBinaryTree(root);
  expect(actual).toEqual(expected);
});

test(`[1,3,2,5]`, () => {
  const inputs = [[1, 3, 2, 5]];
  const expected = 2;
  const root = createBinaryTree(inputs[0]);
  const actual = widthOfBinaryTree(root);
  expect(actual).toEqual(expected);
});
