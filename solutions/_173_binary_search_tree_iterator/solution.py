from typing import Optional
from test_helpers.binary_tree import TreeNode


class BSTIterator:

    def __init__(self, root: Optional[TreeNode]):
        self.stack = []
        self.dfs(root)

    def next(self) -> int:
        node = self.stack.pop()
        self.dfs(node.right)
        return node.val

    def hasNext(self) -> bool:
        return len(self.stack) > 0

    def dfs(self, node):
        while node:
            self.stack.append(node)
            node = node.left


# https://leetcode.com/problems/binary-search-tree-iterator/
