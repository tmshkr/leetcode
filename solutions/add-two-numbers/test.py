import unittest
from solution import Solution, ListNode

s = Solution()
def createList(l):
		head = ListNode(l[0])
		prev = head

		for i in range(1, len(l)):
			node = ListNode(l[i])
			prev.next = node
			prev = node

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
		head = s.addTwoNumbers(createList([2,4,3]), createList([5,6,4]))
		checkList(self, head, [7,0,8])

	def test_1(self):
		head = s.addTwoNumbers(createList([0]), createList([0]))
		checkList(self, head, [0])

	def test_2(self):
		head = s.addTwoNumbers(createList([9,9,9,9,9,9,9]), createList([9,9,9,9]))
		checkList(self, head, [8,9,9,9,0,0,0,1])


if __name__ == "__main__":
	unittest.main()