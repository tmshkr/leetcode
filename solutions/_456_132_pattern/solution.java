
package _456_132_pattern;

import java.util.Stack;

class Solution {
    public boolean find132pattern(int[] nums) {
        var stack = new Stack<int[]>(); // [num, min]
        int min = nums[0];

        for (int num : nums) {
            while (!stack.isEmpty() && num >= stack.peek()[0]) {
                stack.pop();
            }
            if (!stack.isEmpty() && num < stack.peek()[0] && num > stack.peek()[1]) {
                return true;
            }
            stack.push(new int[] { num, min });
            min = Math.min(num, min);
        }

        return false;
    }
}

/*
 * https://leetcode.com/problems/132-pattern/
 */