import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6)

	def test_1(self):
		self.assertEqual(s.trap([4,2,0,3,2,5]), 9)


if __name__ == "__main__":
	unittest.main()