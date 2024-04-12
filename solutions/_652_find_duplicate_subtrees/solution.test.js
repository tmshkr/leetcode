const { findDuplicateSubtrees, TreeNode } = require("./solution.js");

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

function converTreeToList(root) {
  if (!root) return [];
  const res = [];
  const q = [root];

  while (q.length) {
    const node = q.shift();
    if (node === null) {
      res.push(null);
      continue;
    }
    res.push(node.val);
    q.push(node.left);
    q.push(node.right);
  }

  while (res[res.length - 1] === null) {
    res.pop();
  }

  return res;
}

test(`[1,2,3,4,null,2,4,null,null,4]`, () => {
  const inputs = [[1, 2, 3, 4, null, 2, 4, null, null, 4]];
  const expected = [[2, 4], [4]];
  const root = createBinaryTree(inputs[0]);
  const actual = findDuplicateSubtrees(root)
    .map(converTreeToList)
    .sort((a, b) => a[0] - b[0]);
  expect(actual).toEqual(expected);
});

test(`[2,1,1]`, () => {
  const inputs = [[2, 1, 1]];
  const expected = [[1]];
  const root = createBinaryTree(inputs[0]);
  const actual = findDuplicateSubtrees(root)
    .map(converTreeToList)
    .sort((a, b) => a[0] - b[0]);
  expect(actual).toEqual(expected);
});

test(`[2,2,2,3,null,3,null]`, () => {
  const inputs = [[2, 2, 2, 3, null, 3, null]];
  const expected = [[2, 3], [3]];
  const root = createBinaryTree(inputs[0]);
  const actual = findDuplicateSubtrees(root)
    .map(converTreeToList)
    .sort((a, b) => a[0] - b[0]);
  expect(actual).toEqual(expected);
});
