import unittest
from solution import Solution, TreeNode

s = Solution()


def insert(root, val):
    if root.val:
        if val < root.val:
            if root.left is None:
                root.left = TreeNode(val)
            else:
                insert(root.left, val)
        elif val > root.val:
            if root.right is None:
                root.right = TreeNode(val)
            else:
                insert(root.right, val)
    else:
        root.val = val


def createTree(l):
    if len(l) == 0:
        return None

    root = TreeNode()
    for i, val in enumerate(l):
        insert(root, val)
    return root


def checkTree(self, root, spec):
    if not root:
        return

    queue = [root]

    while queue:
        level_nodes = len(queue)
        for _ in range(level_nodes):
            node = queue.pop(0)
            self.assertEqual(node.val, spec[0])
            spec.pop(0)

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)


class TestSolution(unittest.TestCase):
    def test_0(self):
        root = s.invertTree(createTree([4, 2, 7, 1, 3, 6, 9]))
        checkTree(self, root, [4, 7, 2, 9, 6, 3, 1])

    def test_1(self):
        root = s.invertTree(createTree([2, 1, 3]))
        checkTree(self, root, [2, 3, 1])

    def test_2(self):
        root = s.invertTree(createTree([]))
        checkTree(self, root, [])


if __name__ == "__main__":
    unittest.main()
