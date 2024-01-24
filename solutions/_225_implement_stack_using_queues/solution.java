package _225_implement_stack_using_queues;

import java.util.*;

class MyStack {
    Deque<Integer> q;

    public MyStack() {
        this.q = new ArrayDeque<>();
    }

    public void push(int x) {
        this.q.addLast(x);
    }

    public int pop() {
        return this.q.removeLast();
    }

    public int top() {
        return this.q.peekLast();
    }

    public boolean empty() {
        return this.q.size() == 0;
    }
}

/*
 * https://leetcode.com/problems/implement-stack-using-queues/
 */