import unittest
from code import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.characterReplacement("ABAB",2), 4)

	def test_1(self):
		self.assertEqual(s.characterReplacement("AABABBA",1), 4)


if __name__ == "__main__":
	unittest.main()