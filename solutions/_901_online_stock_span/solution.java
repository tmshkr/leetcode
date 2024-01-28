
package _901_online_stock_span;

import java.util.Stack;

class StockSpanner {

    Stack<int[]> stack;

    public StockSpanner() {
        stack = new Stack<>(); // [price, span]
    }

    public int next(int price) {
        int span = 1;
        while (!stack.isEmpty() && stack.peek()[0] <= price) {
            span += stack.pop()[1];
        }
        stack.push(new int[] { price, span });
        return span;
    }
}

/*
 * https://leetcode.com/problems/online-stock-span/
 */