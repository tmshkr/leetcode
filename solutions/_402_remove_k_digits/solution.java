package _402_remove_k_digits;

import java.util.Stack;

class Solution {
    public String removeKdigits(String num, int k) {
        var stack = new Stack<Character>();
        for (char ch : num.toCharArray()) {
            while (stack.size() > 0 && k > 0 && stack.peek() > ch) {
                stack.pop();
                k--;
            }
            stack.push(ch);
        }

        while (k > 0) {
            stack.pop();
            k--;
        }

        StringBuilder sb = new StringBuilder();
        for (char ch : stack) {
            if (sb.length() == 0 && ch == '0') {
                continue;
            }
            sb.append(ch);
        }

        return sb.length() == 0 ? "0" : sb.toString();
    }
}

/*
 * https://leetcode.com/problems/remove-k-digits/
 */