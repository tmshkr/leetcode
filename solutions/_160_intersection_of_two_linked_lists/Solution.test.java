
package _160_intersection_of_two_linked_lists;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class SolutionTest {
  private static ListNode createList(int[] arr) {
    if (arr.length == 0) {
      return null;
    }
    ListNode head = new ListNode(arr[0]);
    ListNode curr = head;
    for (int i = 1; i < arr.length; i++) {
      curr.next = new ListNode(arr[i]);
      curr = curr.next;
    }
    return head;
  }

  private static void joinLists(ListNode headA, ListNode headB, int skipA, int skipB) {
    ListNode a = headA;
    ListNode b = headB;
    for (int i = 0; i < skipA - 1; i++) {
      a = a.next;
    }
    for (int i = 0; i < skipB; i++) {
      b = b.next;
    }
    if (b != null) {
      a.next = b;
    }
  }

  @Test
  @DisplayName("8,[4,1,8,4,5],[5,6,1,8,4,5],2,3")
  void getIntersectionNode0() {
    Solution s = new Solution();
    ListNode headA = createList(new int[] { 4, 1, 8, 4, 5 });
    ListNode headB = createList(new int[] { 5, 6, 1, 8, 4, 5 });
    joinLists(headA, headB, 2, 3);
    ListNode actual = s.getIntersectionNode(headA, headB);
    assertEquals(8, actual.val);
  }

  @Test
  @DisplayName("2,[1,9,1,2,4],[3,2,4],3,1")
  void getIntersectionNode1() {
    Solution s = new Solution();
    ListNode headA = createList(new int[] { 1, 9, 1, 2, 4 });
    ListNode headB = createList(new int[] { 3, 2, 4 });
    joinLists(headA, headB, 3, 1);
    ListNode actual = s.getIntersectionNode(headA, headB);
    assertEquals(2, actual.val);
  }

  @Test
  @DisplayName("0,[2,6,4],[1,5],3,2")
  void getIntersectionNode2() {
    Solution s = new Solution();
    ListNode headA = createList(new int[] { 2, 6, 4 });
    ListNode headB = createList(new int[] { 1, 5 });
    joinLists(headA, headB, 3, 2);
    ListNode actual = s.getIntersectionNode(headA, headB);
    assertEquals(null, actual);
  }

}