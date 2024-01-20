
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [7,[2,3,1,2,4,3]]
        expected = 2
        actual = s.minSubArrayLen(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [4,[1,4,4]]
        expected = 1
        actual = s.minSubArrayLen(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [11,[1,1,1,1,1,1,1,1]]
        expected = 0
        actual = s.minSubArrayLen(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
