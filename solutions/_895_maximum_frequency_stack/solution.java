package _895_maximum_frequency_stack;

import java.util.*;

class FreqStack {

    private Stack<Stack<Integer>> stack;
    private HashMap<Integer, Integer> freq;

    public FreqStack() {
        stack = new Stack<Stack<Integer>>();
        freq = new HashMap<Integer, Integer>();
    }

    public void push(int val) {
        int count = freq.getOrDefault(val, 0) + 1;
        freq.put(val, count);

        if (count > stack.size()) {
            stack.push(new Stack<Integer>());
            stack.lastElement().push(val);
        } else {
            stack.get(count - 1).push(val);
        }

    }

    public int pop() {
        int val = stack.lastElement().pop();
        if (stack.lastElement().isEmpty()) {
            stack.pop();
        }
        int count = freq.get(val) - 1;
        freq.put(val, count);
        return val;
    }
}

/*
 * https://leetcode.com/problems/maximum-frequency-stack/
 */