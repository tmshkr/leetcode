import unittest
from solution import Solution
from test_helpers.binary_tree import create_binary_tree


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[3, 2, 3, None, 3, None, 1]]
        expected = 7
        root = create_binary_tree(*inputs)
        actual = s.rob(root)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[3, 4, 5, 1, 3, None, 1]]
        expected = 9
        root = create_binary_tree(*inputs)
        actual = s.rob(root)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
