import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.climbStairs(2), 2)

    def test_1(self):
        self.assertEqual(s.climbStairs(3), 3)

    def test_2(self):
        self.assertEqual(s.climbStairs(42), 433494437)


if __name__ == "__main__":
    unittest.main()
