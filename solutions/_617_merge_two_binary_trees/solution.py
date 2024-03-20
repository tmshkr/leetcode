from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def mergeTrees(
        self, a: Optional[TreeNode], b: Optional[TreeNode]
    ) -> Optional[TreeNode]:
        if not a and not b:
            return None
        if not a:
            return b
        if not b:
            return a
        a.val += b.val
        a.left = self.mergeTrees(a.left, b.left)
        a.right = self.mergeTrees(a.right, b.right)
        return a


# https://leetcode.com/problems/merge-two-binary-trees/
