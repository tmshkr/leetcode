import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        sol = Solution()
        s = ["h", "e", "l", "l", "o"]
        expected = ["o", "l", "l", "e", "h"]
        sol.reverseString(s)
        self.assertEqual(s, expected)

    def test_1(self):
        sol = Solution()
        s = ["H", "a", "n", "n", "a", "h"]
        expected = ["h", "a", "n", "n", "a", "H"]
        sol.reverseString(s)
        self.assertEqual(s, expected)


if __name__ == "__main__":
    unittest.main()
