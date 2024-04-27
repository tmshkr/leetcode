import unittest
from solution import Solution
from test_helpers.binary_tree import convert_tree_to_list, create_binary_tree


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[4, 1, 6, 0, 2, 5, 7, None, None, None, 3, None, None, None, 8]]
        expected = [
            30,
            36,
            21,
            36,
            35,
            26,
            15,
            None,
            None,
            None,
            33,
            None,
            None,
            None,
            8,
        ]
        root = create_binary_tree(*inputs)
        actual = s.convertBST(root)
        self.assertEqual(convert_tree_to_list(actual), expected)

    def test_1(self):
        s = Solution()
        inputs = [[0, None, 1]]
        expected = [1, None, 1]
        root = create_binary_tree(*inputs)
        actual = s.convertBST(root)
        self.assertEqual(convert_tree_to_list(actual), expected)


if __name__ == "__main__":
    unittest.main()
