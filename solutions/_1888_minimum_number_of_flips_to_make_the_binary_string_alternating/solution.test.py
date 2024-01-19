
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = ["111000"]
        expected = 2
        actual = s.minFlips(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = ["010"]
        expected = 0
        actual = s.minFlips(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_2(self):
        s = Solution()
        inputs = ["1110"]
        expected = 1
        actual = s.minFlips(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
