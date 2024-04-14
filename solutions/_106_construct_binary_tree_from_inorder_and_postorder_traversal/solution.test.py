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
        inputs = [[9, 3, 15, 20, 7], [9, 15, 7, 20, 3]]
        expected = [3, 9, 20, None, None, 15, 7]
        actual = s.buildTree(*inputs)
        self.assertEqual(convert_tree_to_list(actual), expected)

    def test_1(self):
        s = Solution()
        inputs = [[-1], [-1]]
        expected = [-1]
        actual = s.buildTree(*inputs)
        self.assertEqual(convert_tree_to_list(actual), expected)


if __name__ == "__main__":
    unittest.main()
