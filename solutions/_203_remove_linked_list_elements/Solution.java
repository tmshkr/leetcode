package _203_remove_linked_list_elements;

class Solution {

  public ListNode removeElements(ListNode head, int val) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode curr = dummy;

    while (curr.next != null) {
      if (curr.next.val == val) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    return dummy.next;
  }
}
/*
https://leetcode.com/problems/remove-linked-list-elements/
*/
