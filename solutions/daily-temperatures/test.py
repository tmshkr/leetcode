import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.dailyTemperatures([73,74,75,71,69,72,76,73]), [1,1,4,2,1,1,0,0])

	def test_1(self):
		self.assertEqual(s.dailyTemperatures([30,40,50,60]), [1,1,1,0])

	def test_2(self):
		self.assertEqual(s.dailyTemperatures([30,60,90]), [1,1,0])


if __name__ == "__main__":
	unittest.main()