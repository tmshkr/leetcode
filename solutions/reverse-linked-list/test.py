import unittest
from code import Solution, ListNode

s = Solution()

def populateList(l):
		head = ListNode(l[0] if len(l) > 0 else None)
		prev = head
		for i in range(1, len(l)):
			node = ListNode(l[i])
			prev.next = node
			prev = node
		return head

def checkValues(self, head, l):
	rev = list(reversed(l))
	curr = head
	i = 0
	while (curr.next):
			self.assertEqual(curr.val, rev[i])
			curr = curr.next
			i += 1

class TestSolution(unittest.TestCase):
	def test_0(self):
		l = [1,2,3,4,5]
		head = s.reverseList(populateList(l))
		checkValues(self, head, l)

	def test_1(self):
		l = [1,2]
		head = s.reverseList(populateList(l))
		checkValues(self, head, l)

	def test_2(self):
		l = []
		head = s.reverseList(populateList(l))
		checkValues(self, head, l)


if __name__ == "__main__":
	unittest.main()