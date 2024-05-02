import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [["3", "6", "7", "10"], 4]
        expected = "3"
        actual = s.kthLargestNumber(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [["2", "21", "12", "1"], 3]
        expected = "2"
        actual = s.kthLargestNumber(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [["0", "0"], 2]
        expected = "0"
        actual = s.kthLargestNumber(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
