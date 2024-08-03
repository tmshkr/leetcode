
import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [["cat","bt","hat","tree"],"atach"]
        expected = 6
        actual = s.countCharacters(*inputs)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        inputs = [["hello","world","leetcode"],"welldonehoneyr"]
        expected = 10
        actual = s.countCharacters(*inputs)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
