
package _147_insertion_sort_list;

class Solution {
    public ListNode insertionSortList(ListNode head) {
        ListNode dummy = new ListNode();
        ListNode prev = dummy;
        ListNode curr = head;
        while (curr != null) {
            if (prev.next != null && prev.next.val > curr.val) {
                prev = dummy;
            }
            while (prev.next != null && prev.next.val < curr.val) {
                prev = prev.next;
            }

            ListNode nxt = curr.next;
            curr.next = prev.next;
            prev.next = curr;
            curr = nxt;
        }
        return dummy.next;
    }
}

/*
 * https://leetcode.com/problems/insertion-sort-list/
 */
