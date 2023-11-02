import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.minInterval([[1,4],[2,4],[3,6],[4,4]],[2,3,4,5]), [3,3,1,4])

	def test_1(self):
		self.assertEqual(s.minInterval([[2,3],[2,5],[1,8],[20,25]],[2,19,5,22]), [2,-1,4,6])


if __name__ == "__main__":
	unittest.main()