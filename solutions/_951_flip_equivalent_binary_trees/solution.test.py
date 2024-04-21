import unittest
from solution import Solution
from test_helpers.binary_tree import create_binary_tree


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [
            [1, 2, 3, 4, 5, 6, None, None, None, 7, 8],
            [1, 3, 2, None, 6, 4, 5, None, None, None, None, 8, 7],
        ]
        expected = True
        root1 = create_binary_tree(inputs[0])
        root2 = create_binary_tree(inputs[1])
        actual = s.flipEquiv(root1, root2)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[], []]
        expected = True
        root1 = create_binary_tree(inputs[0])
        root2 = create_binary_tree(inputs[1])
        actual = s.flipEquiv(root1, root2)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [[], [1]]
        expected = False
        root1 = create_binary_tree(inputs[0])
        root2 = create_binary_tree(inputs[1])
        actual = s.flipEquiv(root1, root2)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
