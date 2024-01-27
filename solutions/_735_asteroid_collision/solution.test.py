
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[5,10,-5]]
        expected = [5,10]
        actual = s.asteroidCollision(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[8,-8]]
        expected = []
        actual = s.asteroidCollision(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = [[10,2,-5]]
        expected = [10]
        actual = s.asteroidCollision(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
