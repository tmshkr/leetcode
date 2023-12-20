
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["cbaebabacd","abc"]
        expected = [0,6]
        actual = s.findAnagrams(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = ["abab","ab"]
        expected = [0,1,2]
        actual = s.findAnagrams(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
