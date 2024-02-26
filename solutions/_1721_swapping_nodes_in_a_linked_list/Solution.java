
package _1721_swapping_nodes_in_a_linked_list;

class Solution {
    public ListNode swapNodes(ListNode head, int k) {
        ListNode cur = head;
        for (int i = 1; i < k; i++) {
            cur = cur.next;
        }

        ListNode left = cur;
        ListNode right = head;
        while (cur.next != null) {
            cur = cur.next;
            right = right.next;
        }

        int tmp = left.val;
        left.val = right.val;
        right.val = tmp;

        return head;
    }
}

/*
 * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
 */
