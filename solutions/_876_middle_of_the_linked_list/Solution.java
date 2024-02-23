
package _876_middle_of_the_linked_list;

class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}

/*
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */