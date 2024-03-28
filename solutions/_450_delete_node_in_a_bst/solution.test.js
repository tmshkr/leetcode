const { deleteNode, TreeNode } = require("./solution.js");

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

test(`[5,3,6,2,4,null,7],3`, () => {
  const inputs = [[5, 3, 6, 2, 4, null, 7], 3];
  const expected = [5, 4, 6, 2, null, null, 7];
  const root = createBinaryTree(inputs[0]);
  const actual = deleteNode(root, inputs[1]);
  expect(converTreeToList(actual)).toEqual(expected);
});

test(`[5,3,6,2,4,null,7],0`, () => {
  const inputs = [[5, 3, 6, 2, 4, null, 7], 0];
  const expected = [5, 3, 6, 2, 4, null, 7];
  const root = createBinaryTree(inputs[0]);
  const actual = deleteNode(root, inputs[1]);
  expect(converTreeToList(actual)).toEqual(expected);
});

test(`[],0`, () => {
  const inputs = [[], 0];
  const expected = [];
  const root = createBinaryTree(inputs[0]);
  const actual = deleteNode(root, inputs[1]);
  expect(converTreeToList(actual)).toEqual(expected);
});
