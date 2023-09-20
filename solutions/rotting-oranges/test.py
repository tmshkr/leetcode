import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.orangesRotting([[2,1,1],[1,1,0],[0,1,1]]), 4)

	def test_1(self):
		self.assertEqual(s.orangesRotting([[2,1,1],[0,1,1],[1,0,1]]), -1)

	def test_2(self):
		self.assertEqual(s.orangesRotting([[0,2]]), 0)


if __name__ == "__main__":
	unittest.main()