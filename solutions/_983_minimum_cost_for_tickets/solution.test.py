
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[1,4,6,7,8,20],[2,7,15]]
        expected = 11
        actual = s.mincostTickets(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[1,2,3,4,5,6,7,8,9,10,30,31],[2,7,15]]
        expected = 17
        actual = s.mincostTickets(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
