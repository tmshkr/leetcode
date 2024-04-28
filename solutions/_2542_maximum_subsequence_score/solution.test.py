
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,3,3,2],[2,1,3,4],3]
        expected = 12
        actual = s.maxScore(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[4,2,3,1,1],[7,5,10,9,6],1]
        expected = 30
        actual = s.maxScore(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
