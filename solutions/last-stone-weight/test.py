import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.lastStoneWeight([2,7,4,1,8,1]), 1)

	def test_1(self):
		self.assertEqual(s.lastStoneWeight([1]), 1)


if __name__ == "__main__":
	unittest.main()