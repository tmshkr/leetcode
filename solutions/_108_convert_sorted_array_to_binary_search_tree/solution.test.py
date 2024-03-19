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
        expected = [0, -3, 9, -10, None, 5]
        actual = s.sortedArrayToBST([-10, -3, 0, 5, 9])
        self.assertEqual(convert_tree_to_list(actual), expected)

    def test_1(self):
        s = Solution()
        actual = s.sortedArrayToBST([1, 3])
        expected = [3, 1]
        self.assertEqual(convert_tree_to_list(actual), expected)


if __name__ == "__main__":
    unittest.main()
