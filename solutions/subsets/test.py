import unittest
from solution import Solution

s = Solution()


def compare(self, a, b):
    self.assertEqual(len(a), len(b))
    for i in range(len(a)):
        self.assertEqual(a[i] in b, True)


class TestSolution(unittest.TestCase):
    def test_0(self):
        res = s.subsets([1, 2, 3])
        compare(self, res, [[], [1], [2], [
            1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])

    def test_1(self):
        res = s.subsets([0])
        compare(self, res, [[], [0]])


if __name__ == "__main__":
    unittest.main()
