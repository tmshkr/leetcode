
package _735_asteroid_collision;

import java.util.Stack;

class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        var s = new Stack<Integer>();

        for (int a : asteroids) {
            int top = s.isEmpty() ? 0 : s.peek();
            while (a < 0 && top > 0) {
                int sum = top + a;
                if (sum > 0) {
                    // a explodes
                    a = 0;
                } else if (sum < 0) {
                    // top explodes
                    s.pop();
                } else {
                    // both explode
                    a = 0;
                    s.pop();
                }
                top = s.isEmpty() ? 0 : s.peek();
            }
            if (a != 0) {
                s.push(a);
            }
        }

        int[] result = new int[s.size()];
        for (int i = result.length - 1; i >= 0; i--) {
            result[i] = s.pop();
        }
        return result;
    }
}

/*
 * https://leetcode.com/problems/asteroid-collision/
 */