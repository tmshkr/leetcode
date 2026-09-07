import unittest
from solution import Solution


class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        inputs = [["eat", "tea", "tan", "ate", "nat", "bat"]]
        expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
        actual = s.groupAnagrams(*inputs)
        actual.sort(key=len)
        for group in actual:
            group.sort()
        self.assertEqual(actual, expected)

    def test_1(self):
        s = Solution()
        inputs = [[""]]
        expected = [[""]]
        actual = s.groupAnagrams(*inputs)
        actual.sort(key=len)
        for group in actual:
            group.sort()
        self.assertEqual(actual, expected)

    def test_2(self):
        s = Solution()
        inputs = [["a"]]
        expected = [["a"]]
        actual = s.groupAnagrams(*inputs)
        actual.sort(key=len)
        for group in actual:
            group.sort()
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
