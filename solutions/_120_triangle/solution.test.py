
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[[2],[3,4],[6,5,7],[4,1,8,3]]]
        expected = 11
        actual = s.minimumTotal(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[[-10]]]
        expected = -10
        actual = s.minimumTotal(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
