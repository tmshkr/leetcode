import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.countBits(2), [0,1,1])

	def test_1(self):
		self.assertEqual(s.countBits(5), [0,1,1,2,1,2])


if __name__ == "__main__":
	unittest.main()