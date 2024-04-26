
package _173_binary_search_tree_iterator;

import java.util.Stack;
import test_helpers.binary_tree.TreeNode;

class BSTIterator {
    Stack<TreeNode> stack;

    public BSTIterator(TreeNode root) {
        this.stack = new Stack<TreeNode>();
        this.dfs(root);
    }

    public void dfs(TreeNode node) {
        while (node != null) {
            this.stack.add(node);
            node = node.left;
        }
    }

    public int next() {
        TreeNode node = this.stack.pop();
        this.dfs(node.right);
        return node.val;

    }

    public boolean hasNext() {
        return this.stack.size() > 0;
    }
}

/*
 * https://leetcode.com/problems/binary-search-tree-iterator/
 */