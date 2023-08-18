const { lowestCommonAncestor, TreeNode } = require("./code.js");

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

function findNode(root, val) {
  if (!root || root.val === val) {
    return root;
  }

  return val < root.val ? findNode(root.left, val) : findNode(root.right, val);
}

test(`[6,2,8,0,4,7,9,null,null,3,5],2,8`, () => {
  const root = createBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  const p = findNode(root, 2);
  const q = findNode(root, 8);
  expect(lowestCommonAncestor(root, p, q).val).toEqual(6);
});

test(`[6,2,8,0,4,7,9,null,null,3,5],2,4`, () => {
  const root = createBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  const p = findNode(root, 2);
  const q = findNode(root, 4);
  expect(lowestCommonAncestor(root, p, q).val).toEqual(2);
});

test(`[2,1],2,1`, () => {
  const root = createBinaryTree([2, 1]);
  const p = findNode(root, 2);
  const q = findNode(root, 1);
  expect(lowestCommonAncestor(root, p, q).val).toEqual(2);
});
