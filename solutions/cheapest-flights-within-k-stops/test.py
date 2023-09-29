import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.findCheapestPrice(4,[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]],0,3,1), 700)

	def test_1(self):
		self.assertEqual(s.findCheapestPrice(3,[[0,1,100],[1,2,100],[0,2,500]],0,2,1), 200)

	def test_2(self):
		self.assertEqual(s.findCheapestPrice(3,[[0,1,100],[1,2,100],[0,2,500]],0,2,0), 500)


if __name__ == "__main__":
	unittest.main()