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
		head = s.removeNthFromEnd(createList([1,2,3,4,5]), 2)
		checkValues(self, head, [1,2,3,5])

	def test_1(self):
		head = s.removeNthFromEnd(createList([1]), 1)
		checkValues(self, head, [])

	def test_2(self):
		head = s.removeNthFromEnd(createList([1,2]), 1)
		checkValues(self, head, [1])


if __name__ == "__main__":
	unittest.main()