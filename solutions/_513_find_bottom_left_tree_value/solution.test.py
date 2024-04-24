import unittest
from solution import Solution
from test_helpers.binary_tree import create_binary_tree


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[2, 1, 3]]
        expected = 1
        root = create_binary_tree(inputs[0])
        actual = s.findBottomLeftValue(root)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[1, 2, 3, 4, None, 5, 6, None, None, 7]]
        expected = 7
        root = create_binary_tree(inputs[0])
        actual = s.findBottomLeftValue(root)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
