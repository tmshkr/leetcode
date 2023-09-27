import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2), 2)

	def test_1(self):
		self.assertEqual(s.networkDelayTime([[1,2,1]],2,1), 1)

	def test_2(self):
		self.assertEqual(s.networkDelayTime([[1,2,1]],2,2), -1)


if __name__ == "__main__":
	unittest.main()