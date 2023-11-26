import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = ("egg", "add")
        expected = True
        actual = s.isIsomorphic(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ("foo", "bar")
        expected = False
        actual = s.isIsomorphic(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = ("paper", "title")
        expected = True
        actual = s.isIsomorphic(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
