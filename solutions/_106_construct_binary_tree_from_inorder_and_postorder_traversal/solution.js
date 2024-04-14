function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  const build = (inStart, inEnd, postStart, postEnd) => {
    if (inStart > inEnd || postStart > postEnd) {
      return null;
    }

    const node = new TreeNode(postorder[postEnd]);
    const inIdx = map.get(node.val);
    const leftSize = inIdx - inStart;

    node.left = build(inStart, inIdx - 1, postStart, postStart + leftSize - 1);
    node.right = build(inIdx + 1, inEnd, postStart + leftSize, postEnd - 1);
    return node;
  };

  return build(0, inorder.length - 1, 0, postorder.length - 1);
};

module.exports = { buildTree, TreeNode };

/*
https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
*/
