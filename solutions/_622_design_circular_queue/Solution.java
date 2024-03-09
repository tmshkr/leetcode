
package _622_design_circular_queue;

class MyCircularQueue {
    Node head;
    Node tail;
    int capacity;
    int size;

    public MyCircularQueue(int k) {
        this.head = null;
        this.tail = null;
        this.capacity = k;
        this.size = 0;
    }

    public boolean enQueue(int val) {
        if (this.isFull()) {
            return false;
        }

        Node node = new Node(val);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return true;
    }

    public boolean deQueue() {
        if (this.isEmpty()) {
            return false;
        }
        this.head = this.head.next;
        this.size--;
        return true;
    }

    public int Front() {
        return this.isEmpty() ? -1 : this.head.val;
    }

    public int Rear() {
        return this.isEmpty() ? -1 : this.tail.val;
    }

    public boolean isEmpty() {
        return this.size == 0;
    }

    public boolean isFull() {
        return this.capacity == this.size;
    }
}


/*
 * https://leetcode.com/problems/design-circular-queue/
 */