
package _61_rotate_list;

class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null) {
            return null;
        }
        int len = 1;
        ListNode curr = head;
        while (curr.next != null) {
            curr = curr.next;
            len++;
        }
        k = k % len;
        if (k == 0) {
            return head;
        }

        curr.next = head;
        for (int i = 0; i < len - k; i++) {
            curr = curr.next;
        }
        head = curr.next;
        curr.next = null;
        return head;
    }
}

/*
 * https://leetcode.com/problems/rotate-list/
 */