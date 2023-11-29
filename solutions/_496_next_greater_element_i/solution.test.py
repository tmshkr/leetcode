
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[4,1,2],[1,3,4,2]]
        expected = [-1,3,-1]
        actual = s.nextGreaterElement(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[2,4],[1,2,3,4]]
        expected = [3,-1]
        actual = s.nextGreaterElement(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
