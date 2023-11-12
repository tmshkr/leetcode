import unittest
from solution import Solution

s = Solution()


class TestSolution(unittest.TestCase):
    def test_0(self):
        self.assertEqual(s.hammingWeight(0b00000000000000000000000000001011), 3)

    def test_1(self):
        self.assertEqual(s.hammingWeight(0b00000000000000000000000010000000), 1)

    def test_2(self):
        self.assertEqual(s.hammingWeight(0b11111111111111111111111111111101), 31)


if __name__ == "__main__":
    unittest.main()
