
package _106_construct_binary_tree_from_inorder_and_postorder_traversal;

import java.util.HashMap;

class Solution {
    HashMap<Integer, Integer> map = new HashMap<>();
    int[] postorder;

    public TreeNode buildTree(int[] inorder, int[] postorder) {
        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i], i);
        }
        this.postorder = postorder;
        return build(0, inorder.length - 1, 0, postorder.length - 1);
    }

    private TreeNode build(int inStart, int inEnd, int postStart, int postEnd) {
        if (inStart > inEnd || postStart > postEnd) {
            return null;
        }

        TreeNode node = new TreeNode(postorder[postEnd]);
        int inIdx = map.get(node.val);
        int leftSize = inIdx - inStart;

        node.left = build(inStart, inIdx - 1, postStart, postStart + leftSize - 1);
        node.right = build(inIdx + 1, inEnd, postStart + leftSize, postEnd - 1);

        return node;
    }
}

/*
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-
 * postorder-traversal/
 */