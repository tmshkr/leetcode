
package _473_matchsticks_to_square;

import java.util.Arrays;

class Solution {
    int[] matchsticks;
    int[] sides = new int[4];
    int side;

    public boolean makesquare(int[] matchsticks) {
        this.matchsticks = matchsticks;
        if (matchsticks.length < 4) {
            return false;
        }
        int perimeter = 0;
        for (int matchstick : matchsticks) {
            perimeter += matchstick;
        }
        if (perimeter % 4 != 0) {
            return false;
        }
        side = perimeter / 4;
        Arrays.sort(matchsticks);
        reverse(matchsticks);
        return dfs(0);
    }

    private static void reverse(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[n - i - 1];
            arr[n - i - 1] = temp;
        }
    }

    private boolean dfs(int i) {
        if (i == matchsticks.length) {
            for (int s : sides) {
                if (s != side) {
                    return false;
                }
            }
            return true;
        }

        for (int j = 0; j < 4; j++) {
            if (sides[j] + matchsticks[i] <= side) {
                sides[j] += matchsticks[i];
                if (dfs(i + 1)) {
                    return true;
                }
                sides[j] -= matchsticks[i];
            }
        }
        return false;
    }
}

/*
 * https://leetcode.com/problems/matchsticks-to-square/
 */