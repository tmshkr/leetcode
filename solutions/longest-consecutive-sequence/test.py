import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.longestConsecutive([100,4,200,1,3,2]), 4)

	def test_1(self):
		self.assertEqual(s.longestConsecutive([0,3,7,2,5,8,4,6,0,1]), 9)


if __name__ == "__main__":
	unittest.main()