import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.search([-1,0,3,5,9,12],9), 4)

	def test_1(self):
		self.assertEqual(s.search([-1,0,3,5,9,12],2), -1)


if __name__ == "__main__":
	unittest.main()