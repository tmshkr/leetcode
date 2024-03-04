
package _86_partition_list;

class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode left = new ListNode();
        ListNode right = new ListNode();
        ListNode lesser = left;
        ListNode greater = right;
        ListNode curr = head;
        while (curr != null) {
            if (curr.val < x) {
                lesser.next = curr;
                lesser = lesser.next;
            } else {
                greater.next = curr;
                greater = greater.next;
            }
            curr = curr.next;
        }
        lesser.next = right.next;
        greater.next = null;
        return left.next;
    }
}

/*
 * https://leetcode.com/problems/partition-list/
 */
