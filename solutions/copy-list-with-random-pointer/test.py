import unittest
from code import Solution, Node

s = Solution()
def createList(l):
		head = Node(l[0][0])
		prev = head
		arr = [head]

		for i in range(1, len(l)):
			node = Node(l[i][0])
			arr.append(node)
			prev.next = node
			prev = node

		for i in range(len(l)):
			random = l[i][1]
			if random:
				arr[i].random = arr[random]

		return head

def checkList(self, head, l):
	curr = head
	i = 0
	arr = []
	while curr:
			self.assertEqual(curr.val, l[i][0])
			arr.append(curr)
			i += 1
			curr = curr.next
	
	for i in range(len(l)):
		random = l[i][1]
		curr = arr[i]
		if random:
			self.assertEqual(curr.random, arr[random])


class TestSolution(unittest.TestCase):
	def test_0(self):
		head = s.copyRandomList(createList([[7,None],[13,0],[11,4],[10,2],[1,0]]))
		checkList(self, head, [[7,None],[13,0],[11,4],[10,2],[1,0]])

	def test_1(self):
		head = s.copyRandomList(createList([[1,1],[2,1]]))
		checkList(self, head, [[1,1],[2,1]])

	def test_2(self):
		head = s.copyRandomList(createList([[3,None],[3,0],[3,None]]))
		checkList(self, head, [[3,None],[3,0],[3,None]])


if __name__ == "__main__":
	unittest.main()