
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["aa"]
        expected = 0
        actual = s.maxLengthBetweenEqualCharacters(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = ["abca"]
        expected = 2
        actual = s.maxLengthBetweenEqualCharacters(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = ["cbzxy"]
        expected = -1
        actual = s.maxLengthBetweenEqualCharacters(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
