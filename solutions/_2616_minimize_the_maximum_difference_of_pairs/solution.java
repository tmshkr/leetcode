
package _2616_minimize_the_maximum_difference_of_pairs;

import java.util.Arrays;

class Solution {
    public int minimizeMax(int[] nums, int p) {
        Arrays.sort(nums);
        int n = nums.length;
        int L = 0;
        int R = nums[n - 1] - nums[0];

        while (L < R) {
            int mid = L + (R - L) / 2;
            int count = 0;
            for (int i = 1; i < n && count < p; i++) {
                if (nums[i] - nums[i - 1] <= mid) {
                    count++;
                    i++;
                }
            }
            if (count >= p)
                R = mid;
            else
                L = mid + 1;
        }

        return L;
    }
}

/*
 * https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/
 */