import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = [[3, 2, 3]]
        expected = 3
        actual = s.majorityElement(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[2, 2, 1, 1, 1, 2, 2]]
        expected = 2
        actual = s.majorityElement(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
