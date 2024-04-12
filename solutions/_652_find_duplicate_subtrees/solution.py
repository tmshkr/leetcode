from typing import List, Optional
from collections import Counter


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def __init__(self):
        self.res = []
        self.ctr = Counter()

    def findDuplicateSubtrees(
        self, root: Optional[TreeNode]
    ) -> List[Optional[TreeNode]]:
        self.dfs(root)
        return self.res

    def dfs(self, node):
        if not node:
            return None
        left = self.dfs(node.left)
        right = self.dfs(node.right)
        subtree = f"{node.val},{left},{right}"
        if self.ctr[subtree] == 1:
            self.res.append(node)
        self.ctr[subtree] += 1
        return subtree


# https://leetcode.com/problems/find-duplicate-subtrees/
