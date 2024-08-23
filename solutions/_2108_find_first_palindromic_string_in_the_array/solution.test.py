import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [["abc", "car", "ada", "racecar", "cool"]]
        expected = "ada"
        actual = s.firstPalindrome(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [["notapalindrome", "racecar"]]
        expected = "racecar"
        actual = s.firstPalindrome(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [["def", "ghi"]]
        expected = ""
        actual = s.firstPalindrome(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
