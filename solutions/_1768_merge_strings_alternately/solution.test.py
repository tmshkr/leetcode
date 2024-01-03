import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = ["abc", "pqr"]
        expected = "apbqcr"
        actual = s.mergeAlternately(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["ab", "pqrs"]
        expected = "apbqrs"
        actual = s.mergeAlternately(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = ["abcd", "pq"]
        expected = "apbqcd"
        actual = s.mergeAlternately(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
