
package _707_design_linked_list;

class MyLinkedList {

    private ListNode head;
    private ListNode tail;

    public MyLinkedList() {
        this.head = null;
        this.tail = null;
    }

    public int get(int index) {
        ListNode curr = this.head;
        for (int i = 0; i < index && curr != null; i++) {
            curr = curr.next;
        }
        return curr != null ? curr.val : -1;

    }

    public void addAtHead(int val) {
        ListNode node = new ListNode(val);
        node.next = this.head;
        this.head = node;
        if (this.tail == null) {
            this.tail = node;
        }

    }

    public void addAtTail(int val) {
        if (this.tail == null) {
            this.addAtHead(val);
        } else {
            ListNode node = new ListNode(val);
            this.tail.next = node;
            this.tail = node;
        }

    }

    public void addAtIndex(int index, int val) {
        if (index == 0) {
            this.addAtHead(val);
            return;
        }

        ListNode curr = this.head;
        for (int i = 0; i < index - 1 && curr != null; i++) {
            curr = curr.next;
        }
        if (curr == null)
            return;

        ListNode node = new ListNode(val);
        node.next = curr.next;
        curr.next = node;
        if (curr == this.tail) {
            this.tail = node;
        }
    }

    public void deleteAtIndex(int index) {
        if (index == 0) {
            if (this.head == null)
                return;
            this.head = this.head.next;
            if (this.head == null) {
                this.tail = null;
            }
            return;
        }

        ListNode curr = this.head;
        for (int i = 0; i < index - 1 && curr != null; i++) {
            curr = curr.next;
        }
        if (curr == null || curr.next == null)
            return;
        curr.next = curr.next.next;
        if (curr.next == null) {
            this.tail = curr;
        }
    }
}

/*
 * https://leetcode.com/problems/design-linked-list/
 */