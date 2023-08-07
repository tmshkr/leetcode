import unittest
from code import Solution, ListNode

s = Solution()
def createList(l, pos):
		head = ListNode(l[0])
		prev = head
		arr = []

		for i in range(1, len(l)):
			node = ListNode(l[i])
			arr.append(node)
			prev.next = node
			prev = node
		
		if pos > -1:
			arr[-1].next = arr[pos]

		return head


class TestSolution(unittest.TestCase):
	def test_0(self):
		result = s.hasCycle(createList([3,2,0,-4], 1))
		self.assertEqual(result, True)

	def test_1(self):
		result = s.hasCycle(createList([1,2], 0))
		self.assertEqual(result, True)

	def test_2(self):
		result = s.hasCycle(createList([1], -1))
		self.assertEqual(result, False)


if __name__ == "__main__":
	unittest.main()