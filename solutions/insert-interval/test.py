import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.insert([[1,3],[6,9]],[2,5]), [[1,5],[6,9]])

	def test_1(self):
		self.assertEqual(s.insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]), [[1,2],[3,10],[12,16]])


if __name__ == "__main__":
	unittest.main()