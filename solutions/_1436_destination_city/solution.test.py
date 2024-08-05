import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]]
        expected = "Sao Paulo"
        actual = s.destCity(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[["B", "C"], ["D", "B"], ["C", "A"]]]
        expected = "A"
        actual = s.destCity(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [[["A", "Z"]]]
        expected = "Z"
        actual = s.destCity(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
