
package _160_intersection_of_two_linked_lists;

public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode a = headA;
        ListNode b = headB;
        while (a != b) {
            a = a == null ? headB : a.next;
            b = b == null ? headA : b.next;
        }
        return a;
    }

}

/*
 * t /leetcode.com/problems/intersection-of-two-linked-lists/
 */
