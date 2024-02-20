package _234_palindrome_linked_list;

class Solution {

  public boolean isPalindrome(ListNode head) {
    ListNode fast = head;
    ListNode slow = head;

    // find the middle node (slow)
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    // reverse second half
    ListNode left = head;
    ListNode right = reverse(slow);

    // check for palindrome
    while (right != null && left != null) {
      if (right.val != left.val) return false;
      right = right.next;
      left = left.next;
    }

    return true;
  }

  private ListNode reverse(ListNode cur) {
    ListNode prev = null;
    while (cur != null) {
      ListNode tmp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = tmp;
    }
    return prev;
  }
}
/*
https://leetcode.com/problems/palindrome-linked-list/
*/
