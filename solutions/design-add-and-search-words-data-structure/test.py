import unittest
from code import WordDictionary


class TestSolution(unittest.TestCase):
    def test_0(self):
        wordDictionary = WordDictionary()
        wordDictionary.addWord("bad")
        wordDictionary.addWord("dad")
        wordDictionary.addWord("mad")
        self.assertEqual(wordDictionary.search("pad"), False)
        self.assertEqual(wordDictionary.search("bad"), True)
        self.assertEqual(wordDictionary.search(".ad"), True)
        self.assertEqual(wordDictionary.search("b.."), True)


if __name__ == "__main__":
    unittest.main()
