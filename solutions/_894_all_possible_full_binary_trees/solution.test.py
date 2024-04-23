import unittest
from solution import Solution
from test_helpers.binary_tree import convert_tree_to_list


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [7]
        expected = [
            [0, 0, 0, None, None, 0, 0, None, None, 0, 0],
            [0, 0, 0, None, None, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, None, None, None, None, 0, 0],
            [0, 0, 0, 0, 0, None, None, 0, 0],
        ]
        actual = s.allPossibleFBT(*inputs)
        for tree in actual:
            self.assertIn(convert_tree_to_list(tree), expected)

    def test_1(self):
        s = Solution()
        inputs = [3]
        expected = [[0, 0, 0]]
        actual = s.allPossibleFBT(*inputs)
        for tree in actual:
            self.assertIn(convert_tree_to_list(tree), expected)


if __name__ == "__main__":
    unittest.main()
