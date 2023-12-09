import unittest
from solution import Codec


class TestSolution(unittest.TestCase):
    def test_0(self):
        c = Codec()
        shortUrl = c.encode("https://leetcode.com/problems/design-tinyurl")
        print(shortUrl)
        self.assertTrue(shortUrl.startswith("http://tinyurl.com/"))
        self.assertEqual(
            c.decode(shortUrl), "https://leetcode.com/problems/design-tinyurl"
        )


if __name__ == "__main__":
    unittest.main()
