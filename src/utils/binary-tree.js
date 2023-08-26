function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function createBinaryTree(levelOrderList) {
  if (!levelOrderList) {
    return null;
  }

  const root = new TreeNode(levelOrderList[0]);
  const q = [root];
  let index = 1;

  while (q.length && index < levelOrderList.length) {
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

function levelOrderTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const q = [root];

  while (q.length) {
    const node = q.shift();
    result.push(node?.val || null);

    if (node) {
      q.push(node.left);
      q.push(node.right);
    }
  }

  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i]) {
      break;
    }
    result.pop();
  }

  return result;
}

module.exports = { createBinaryTree, levelOrderTraversal, TreeNode };
