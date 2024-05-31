
package _740_delete_and_earn;

import java.util.Arrays;

class Solution {
    public int deleteAndEarn(int[] nums) {
        int max = Arrays.stream(nums).max().getAsInt();
        int[] points = new int[max + 1];
        for (int num : nums) {
            points[num] += num;
        }

        int prev = 0;
        int curr = 0;
        for (int i = 0; i < points.length; i++) {
            int temp = curr;
            curr = Math.max(curr, prev + points[i]);
            prev = temp;
        }
        return curr;
    }
}

/*
 * https://leetcode.com/problems/delete-and-earn/
 */