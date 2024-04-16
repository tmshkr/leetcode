
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [1,0,[-1],[0]]
        expected = 0
        actual = s.numOfMinutes(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [6,2,[2,2,-1,2,2,2],[0,0,1,0,0,0]]
        expected = 1
        actual = s.numOfMinutes(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
