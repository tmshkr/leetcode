import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.maxSlidingWindow([1,3,-1,-3,5,3,6,7],3), [3,3,5,5,6,7])

	def test_1(self):
		self.assertEqual(s.maxSlidingWindow([1],1), [1])


if __name__ == "__main__":
	unittest.main()