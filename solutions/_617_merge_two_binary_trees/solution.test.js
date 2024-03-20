const { mergeTrees, TreeNode } = require("./solution.js");

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

test(`[1,3,2,5],[2,1,3,null,4,null,7]`, () => {
  const treeA = createBinaryTree([1, 3, 2, 5]);
  const treeB = createBinaryTree([2, 1, 3, null, 4, null, 7]);
  const actual = mergeTrees(treeA, treeB);
  const expected = [3, 4, 5, 5, 4, null, 7];
  expect(converTreeToList(actual)).toEqual(expected);
});

test(`[1],[1,2]`, () => {
  const treeA = createBinaryTree([1]);
  const treeB = createBinaryTree([1, 2]);
  const actual = mergeTrees(treeA, treeB);
  const expected = [2, 2];
  expect(converTreeToList(actual)).toEqual(expected);
});
