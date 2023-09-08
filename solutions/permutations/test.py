import unittest
from code import Solution

s = Solution()


def compare(self, a, b):
    self.assertEqual(len(a), len(b))
    for i in range(len(a)):
        self.assertEqual(len(a[i]), len(b[i]))
        s = set(a[i])
        for j in range(len(b[i])):
            self.assertIn(b[i][j], s)


class TestSolution(unittest.TestCase):
    def test_0(self):
        res = s.permute([1, 2, 3])
        expected = [[1, 2, 3], [1, 3, 2], [
            2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
        compare(self, res, expected)

    def test_1(self):
        res = s.permute([0, 1])
        expected = [[0, 1], [1, 0]]
        compare(self, res, expected)

    def test_2(self):
        res = s.permute([1])
        expected = [[1]]
        compare(self, res, expected)


if __name__ == "__main__":
    unittest.main()
