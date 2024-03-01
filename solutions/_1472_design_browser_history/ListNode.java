package _1472_design_browser_history;

public class ListNode {
    String val;
    ListNode prev;
    ListNode next;

    ListNode() {
    }

    ListNode(String val) {
        this.val = val;
    }

    ListNode(String val, ListNode prev) {
        this.val = val;
        this.prev = prev;
    }
}
