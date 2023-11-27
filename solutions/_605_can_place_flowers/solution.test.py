
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ([1,0,0,0,1],1)
        expected = True
        actual = s.canPlaceFlowers(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = ([1,0,0,0,1],2)
        expected = False
        actual = s.canPlaceFlowers(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
