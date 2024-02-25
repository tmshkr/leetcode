
package _2130_maximum_twin_sum_of_a_linked_list;

class Solution {
    public int pairSum(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        ListNode prev = null;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            ListNode tmp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = tmp;
        }

        int res = 0;
        while (slow != null) {
            res = Math.max(res, slow.val + prev.val);
            prev = prev.next;
            slow = slow.next;
        }
        
        return res;
    }
}