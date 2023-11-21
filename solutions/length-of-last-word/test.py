import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
	def test_0(self):
		self.assertEqual(s.lengthOfLastWord("Hello World"), 5)

	def test_1(self):
		self.assertEqual(s.lengthOfLastWord("   fly me   to   the moon  "), 4)

	def test_2(self):
		self.assertEqual(s.lengthOfLastWord("luffy is still joyboy"), 6)


if __name__ == "__main__":
	unittest.main()