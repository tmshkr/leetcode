import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.uniquePaths(3,7), 28)

	def test_1(self):
		self.assertEqual(s.uniquePaths(3,2), 3)


if __name__ == "__main__":
	unittest.main()