import unittest
from code import Solution, ListNode

s = Solution()
def populateList(l):
		head = ListNode(l[0] if len(l) > 0 else 0)
		prev = head
		for i in range(1, len(l)):
			node = ListNode(l[i])
			prev.next = node
			prev = node
		return head

def checkValues(self, head, l):
	curr = head
	i = 0
	while curr:
			if i <= len(l) - 1:
				self.assertEqual(curr.val, l[i])
			else:
				self.assertEqual(curr.val, 0)
			i += 1
			curr = curr.next
			 

class TestSolution(unittest.TestCase):
	def test_0(self):
		merged = s.mergeTwoLists(populateList([1,2,4]), populateList([1,3,4]))
		checkValues(self, merged, [1,1,2,3,4,4])

	def test_1(self):
		merged = s.mergeTwoLists(populateList([]), populateList([]))
		checkValues(self, merged, [])

	def test_2(self):
		merged = s.mergeTwoLists(populateList([]), populateList([0]))
		checkValues(self, merged, [0])


if __name__ == "__main__":
	unittest.main()