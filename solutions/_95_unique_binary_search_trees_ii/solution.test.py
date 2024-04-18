import unittest
from solution import Solution, TreeNode


def convert_tree_to_list(root):
    if not root:
        return []

    res = []
    q = [root]

    while q:
        node = q.pop(0)
        if node is None:
            res.append(None)
            continue
        res.append(node.val)
        q.append(node.left)
        q.append(node.right)

    while res and res[-1] is None:
        res.pop()

    return res


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [3]
        expected = [
            [1, None, 2, None, 3],
            [1, None, 3, 2],
            [2, 1, 3],
            [3, 1, None, None, 2],
            [3, 2, None, 1],
        ]
        actual = s.generateTrees(*inputs)
        res = [convert_tree_to_list(x) for x in actual]
        self.assertEqual(res, expected)

    def test_1(self):
        s = Solution()
        inputs = [1]
        expected = [[1]]
        actual = s.generateTrees(*inputs)
        res = [convert_tree_to_list(x) for x in actual]
        self.assertEqual(res, expected)


if __name__ == "__main__":
    unittest.main()
