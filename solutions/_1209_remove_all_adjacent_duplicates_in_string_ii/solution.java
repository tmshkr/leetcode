package _1209_remove_all_adjacent_duplicates_in_string_ii;

import java.util.Stack;

class Solution {
    public String removeDuplicates(String s, int k) {
        var stack = new Stack<Character>();
        var count = new Stack<Integer>();
        for (char c : s.toCharArray()) {
            if (stack.isEmpty() || stack.peek() != c) {
                stack.push(c);
                count.push(1);
            } else {
                count.push(count.pop() + 1);
            }
            if (count.peek() == k) {
                stack.pop();
                count.pop();
            }
        }

        var sb = new StringBuilder();
        while (!stack.isEmpty()) {
            var c = stack.pop();
            var n = count.pop();
            for (int i = 0; i < n; i++) {
                sb.append(c);
            }
        }
        return sb.reverse().toString();
    }
}

/*
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
 */