
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[-4,-1,0,3,10]]
        expected = [0,1,9,16,100]
        actual = s.sortedSquares(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[-7,-3,2,3,11]]
        expected = [4,9,9,49,121]
        actual = s.sortedSquares(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
