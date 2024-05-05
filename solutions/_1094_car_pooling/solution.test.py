
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [[[2,1,5],[3,3,7]],4]
        expected = False
        actual = s.carPooling(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [[[2,1,5],[3,3,7]],5]
        expected = True
        actual = s.carPooling(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
