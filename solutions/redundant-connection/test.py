import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.findRedundantConnection([[1,2],[1,3],[2,3]]), [2,3])

	def test_1(self):
		self.assertEqual(s.findRedundantConnection([[1,2],[2,3],[3,4],[1,4],[1,5]]), [1,4])


if __name__ == "__main__":
	unittest.main()