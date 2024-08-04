import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["6777133339"]
        expected = "777"
        actual = s.largestGoodInteger(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["2300019"]
        expected = "000"
        actual = s.largestGoodInteger(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = ["42352338"]
        expected = ""
        actual = s.largestGoodInteger(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
