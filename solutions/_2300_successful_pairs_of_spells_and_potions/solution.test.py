
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[5,1,3],[1,2,3,4,5],7]
        expected = [4,0,3]
        actual = s.successfulPairs(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[3,1,2],[8,5,8],16]
        expected = [2,0,2]
        actual = s.successfulPairs(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
