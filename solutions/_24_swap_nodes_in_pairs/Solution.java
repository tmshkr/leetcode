
package _24_swap_nodes_in_pairs;

class Solution {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode a = head;
        ListNode b = head.next;
        a.next = swapPairs(b.next);
        b.next = a;
        return b;
    }
}

/*
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 */