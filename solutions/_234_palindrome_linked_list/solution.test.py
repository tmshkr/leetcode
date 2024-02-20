
import unittest
from solution import Solution, ListNode

def createList(l):
		head = ListNode(l[0] if len(l) > 0 else 0)
		prev = head
		for i in range(1, len(l)):
			node = ListNode(l[i])
			prev.next = node
			prev = node
		return head



class TestSolution(unittest.TestCase):

    def test_0(self):
        s = Solution()
        head = createList([1,2,2,1])
        expected = True
        actual = s.isPalindrome(head)
        self.assertEqual(actual, expected)
        
        
    def test_1(self):
        s = Solution()
        head = createList([1,2])
        expected = False
        actual = s.isPalindrome(head)
        self.assertEqual(actual, expected)
        
        

if __name__ == "__main__":
  unittest.main()
