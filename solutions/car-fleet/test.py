import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.carFleet(12,[10,8,0,5,3],[2,4,1,1,3]), 3)

	def test_1(self):
		self.assertEqual(s.carFleet(10,[3],[3]), 1)

	def test_2(self):
		self.assertEqual(s.carFleet(100,[0,2,4],[4,2,1]), 1)


if __name__ == "__main__":
	unittest.main()