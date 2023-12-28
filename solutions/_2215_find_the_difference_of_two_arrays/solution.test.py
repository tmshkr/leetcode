
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,2,3],[2,4,6]]
        expected = [[1,3],[4,6]]
        actual = s.findDifference(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[1,2,3,3],[1,1,2,2]]
        expected = [[3],[]]
        actual = s.findDifference(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
