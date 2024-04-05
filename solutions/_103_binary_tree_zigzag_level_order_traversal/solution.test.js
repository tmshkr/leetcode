const { zigzagLevelOrder, TreeNode } = require("./solution.js");

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

test(`[3,9,20,null,null,15,7]`, () => {
  const inputs = [[3, 9, 20, null, null, 15, 7]];
  const expected = [[3], [20, 9], [15, 7]];
  const root = createBinaryTree(...inputs);
  const actual = zigzagLevelOrder(root);
  expect(actual).toEqual(expected);
});

test(`[1]`, () => {
  const inputs = [[1]];
  const expected = [[1]];
  const root = createBinaryTree(...inputs);
  const actual = zigzagLevelOrder(root);
  expect(actual).toEqual(expected);
});

test(`[]`, () => {
  const inputs = [[]];
  const expected = [];
  const root = createBinaryTree(...inputs);
  const actual = zigzagLevelOrder(root);
  expect(actual).toEqual(expected);
});
