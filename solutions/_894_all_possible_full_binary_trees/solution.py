from typing import Optional, List


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def __init__(self):
        self.memo = {0: [], 1: [TreeNode(0)]}

    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        if n in self.memo:
            return self.memo[n]
        res = []
        for i in range(1, n, 2):
            for left in self.allPossibleFBT(i):
                for right in self.allPossibleFBT(n - 1 - i):
                    node = TreeNode(0)
                    node.left = left
                    node.right = right
                    res.append(node)
        self.memo[n] = res
        return res


# https://leetcode.com/problems/all-possible-full-binary-trees/
