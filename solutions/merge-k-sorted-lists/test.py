import unittest
from code import Solution, ListNode

s = Solution()

def createList(l):
		if len(l) == 0:
			return None
		
		head = ListNode(l[0])
		prev = head
		for i in range(1, len(l)):
			prev.next = ListNode(l[i])
			prev = prev.next

		return head

def checkList(self, head, l):
	curr = head
	i = 0
	while curr:
			self.assertEqual(curr.val, l[i])
			i += 1
			curr = curr.next


class TestSolution(unittest.TestCase):
	def test_0(self):
		head = s.mergeKLists([createList([1,4,5]), createList([1,3,4]), createList([2,6])])
		checkList(self, head, [1,1,2,3,4,4,5,6])

	def test_1(self):
		head = s.mergeKLists([])
		checkList(self, head, [])

	def test_2(self):
		head = s.mergeKLists([createList([])])
		checkList(self, head, [])


if __name__ == "__main__":
	unittest.main()