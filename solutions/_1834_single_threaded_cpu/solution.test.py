
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[[1,2],[2,4],[3,2],[4,1]]]
        expected = [0,2,3,1]
        actual = s.getOrder(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[[7,10],[7,12],[7,5],[7,4],[7,2]]]
        expected = [4,3,2,0,1]
        actual = s.getOrder(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
