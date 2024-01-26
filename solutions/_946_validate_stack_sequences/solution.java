
package _946_validate_stack_sequences;

import java.util.*;

class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        var stack = new Stack<Integer>();
        int i = 0;
        for (int val : pushed) {
            stack.push(val);
            while (stack.size() > 0 && stack.peek() == popped[i]) {
                stack.pop();
                i++;
            }
        }
        return stack.size() == 0;
    }
}

/*
 * https://leetcode.com/problems/validate-stack-sequences/
 */