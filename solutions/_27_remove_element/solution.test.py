import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = [[3, 2, 2, 3], 3]
        expected = 2
        actual = s.removeElement(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[0, 1, 2, 2, 3, 0, 4, 2], 2]
        expected = 5
        actual = s.removeElement(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
