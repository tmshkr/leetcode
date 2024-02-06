import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution(6)
        expected = 6
        actual = s.guessNumber(10)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution(1)
        expected = 1
        actual = s.guessNumber(1)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution(1)
        expected = 1
        actual = s.guessNumber(2)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
