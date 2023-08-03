import unittest
from code import Solution, ListNode

s = Solution()

def createList(l):
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
			self.assertEqual(curr.val, l[i])
			i += 1
			curr = curr.next


class TestSolution(unittest.TestCase):
	def test_0(self):
		head = createList([1,2,3,4])
		s.reorderList(head)
		checkValues(self, head, [1,4,2,3])


	def test_1(self):
		head = createList([1,2,3,4,5])
		s.reorderList(head)
		checkValues(self, head, [1,5,2,4,3])


if __name__ == "__main__":
	unittest.main()