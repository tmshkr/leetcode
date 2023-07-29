import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.search([4,5,6,7,0,1,2],0), 4)

	def test_1(self):
		self.assertEqual(s.search([4,5,6,7,0,1,2],3), -1)

	def test_2(self):
		self.assertEqual(s.search([1],0), -1)


if __name__ == "__main__":
	unittest.main()