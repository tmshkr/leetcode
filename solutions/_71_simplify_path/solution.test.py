import unittest
from solution import Solution


class TestSolution(unittest.TestCase):
    def test_0(self):
        s = Solution()
        inputs = ["/home/"]
        expected = "/home"
        actual = s.simplifyPath(*inputs)
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = ["/../"]
        expected = "/"
        actual = s.simplifyPath(*inputs)
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = ["/home//foo/"]
        expected = "/home/foo"
        actual = s.simplifyPath(*inputs)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
