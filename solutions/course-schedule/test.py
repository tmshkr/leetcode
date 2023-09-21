import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.canFinish(2, [[1, 0]]), True)

    def test_1(self):
        self.assertEqual(s.canFinish(2, [[1, 0], [0, 1]]), False)


if __name__ == "__main__":
    unittest.main()
