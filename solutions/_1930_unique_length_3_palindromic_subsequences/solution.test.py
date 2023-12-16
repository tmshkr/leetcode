
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["aabca"]
        expected = 3
        actual = s.countPalindromicSubsequence(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = ["adc"]
        expected = 0
        actual = s.countPalindromicSubsequence(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = ["bbcbaba"]
        expected = 4
        actual = s.countPalindromicSubsequence(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
