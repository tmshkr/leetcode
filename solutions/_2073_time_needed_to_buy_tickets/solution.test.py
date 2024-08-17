
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[2,3,2],2]
        expected = 6
        actual = s.timeRequiredToBuy(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[5,1,1,1],0]
        expected = 8
        actual = s.timeRequiredToBuy(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
