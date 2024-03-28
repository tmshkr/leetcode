function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // find the minimum value in the right subtree
    let rightMin = root.right;
    while (rightMin.left) {
      rightMin = rightMin.left;
    }

    root.val = rightMin.val;
    root.right = deleteNode(root.right, rightMin.val);
  }

  return root;
};

module.exports = { deleteNode, TreeNode };

/*
https://leetcode.com/problems/delete-node-in-a-bst/
*/
