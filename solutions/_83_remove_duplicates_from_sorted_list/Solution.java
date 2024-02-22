
package _83_remove_duplicates_from_sorted_list;

class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode curr = head;
        while (curr != null) {
            while (curr.next != null && curr.next.val == curr.val) {
                curr.next = curr.next.next;
            }
            curr = curr.next;
        }
        return head;
    }
}

/*
 * ht /leetcode.com/problems/remove-duplicates-from-sorted-list/
 */
