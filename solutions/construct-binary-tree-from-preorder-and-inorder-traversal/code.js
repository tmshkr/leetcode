function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const mid = inorder.findIndex((x) => x === preorder[0]);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

module.exports = { buildTree, TreeNode };

/*
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
*/
