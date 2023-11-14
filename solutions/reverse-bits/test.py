import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        original = 0b00000010100101000001111010011100
        reversed = 0b00111001011110000010100101000000
        self.assertEqual(s.reverseBits(original), reversed)

    def test_1(self):
        original = 0b11111111111111111111111111111101
        reversed = 0b10111111111111111111111111111111
        self.assertEqual(s.reverseBits(original), reversed)


if __name__ == "__main__":
    unittest.main()
