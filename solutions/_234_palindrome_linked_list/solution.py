
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        fast = head
        slow = head
        
        # find the middle (slow)
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            
        # reverse second half
        left = head
        right = self.reverse(slow)
        
        # check palindrome
        while right:
            if left.val != right.val:
                return False
            left = left.next
            right = right.next
        return True
    
    def reverse(self, cur: ListNode) -> ListNode:
        prev = None
        while cur:
            tmp = cur.next
            cur.next = prev
            prev = cur
            cur = tmp
        return prev
        
  
# https://leetcode.com/problems/palindrome-linked-list/
