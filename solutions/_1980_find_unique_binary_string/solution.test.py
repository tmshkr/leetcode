import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [["01", "10"]]
        expected = ["00", "11"]
        actual = s.findDifferentBinaryString(*inputs)
        self.assertIn(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [["00", "01"]]
        expected = ["10", "11"]
        actual = s.findDifferentBinaryString(*inputs)
        self.assertIn(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [["111", "011", "001"]]
        expected = ["101", "000", "010", "100", "110"]
        actual = s.findDifferentBinaryString(*inputs)
        self.assertIn(actual, expected)


if __name__ == "__main__":
    unittest.main()
