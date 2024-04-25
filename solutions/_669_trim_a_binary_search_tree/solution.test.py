import unittest
from solution import Solution
from test_helpers.binary_tree import create_binary_tree, convert_tree_to_list


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1, 0, 2], 1, 2]
        expected = [1, None, 2]
        root = create_binary_tree(inputs[0])
        actual = s.trimBST(root, *inputs[1:])
        self.assertEqual(convert_tree_to_list(actual), expected)

    def test_1(self):
        s = Solution()
        inputs = [[3, 0, 4, None, 2, None, None, 1], 1, 3]
        expected = [3, 2, None, 1]
        root = create_binary_tree(inputs[0])
        actual = s.trimBST(root, *inputs[1:])
        self.assertEqual(convert_tree_to_list(actual), expected)


if __name__ == "__main__":
    unittest.main()
