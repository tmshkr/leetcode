import unittest
from solution import BrowserHistory


class TestSolution(unittest.TestCase):
    def test_BrowserHistory(self):
        browserHistory = BrowserHistory("leetcode.com")

        self.assertEqual(browserHistory.visit("google.com"), None)
        self.assertEqual(browserHistory.visit("facebook.com"), None)
        self.assertEqual(browserHistory.visit("youtube.com"), None)
        self.assertEqual(browserHistory.back(1), "facebook.com")
        self.assertEqual(browserHistory.back(1), "google.com")
        self.assertEqual(browserHistory.forward(1), "facebook.com")
        self.assertEqual(browserHistory.visit("linkedin.com"), None)
        self.assertEqual(browserHistory.forward(2), "linkedin.com")
        self.assertEqual(browserHistory.back(2), "google.com")
        self.assertEqual(browserHistory.back(7), "leetcode.com")


if __name__ == "__main__":
    unittest.main()
