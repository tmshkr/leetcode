import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = [[1, 2, 4], 5]
        expected = 3
        actual = s.maxFrequency(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[1, 4, 8, 13], 5]
        expected = 2
        actual = s.maxFrequency(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [[3, 9, 6], 2]
        expected = 1
        actual = s.maxFrequency(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
