import unittest
from solution import Solution, ListNode

s = Solution()

def createList(l):
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
		head = s.reverseKGroup(createList([1,2,3,4,5]), 2)
		checkList(self, head, [2,1,4,3,5])
		

	def test_1(self):
		head = s.reverseKGroup(createList([1,2,3,4,5]), 3)
		checkList(self, head, [3,2,1,4,5])


if __name__ == "__main__":
	unittest.main()