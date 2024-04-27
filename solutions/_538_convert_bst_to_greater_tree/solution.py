from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        self.dfs(root, 0)
        return root

    def dfs(self, node, total):
        if not node:
            return total
        node.val += self.dfs(node.right, total)
        return self.dfs(node.left, node.val)


# https://leetcode.com/problems/convert-bst-to-greater-tree/
