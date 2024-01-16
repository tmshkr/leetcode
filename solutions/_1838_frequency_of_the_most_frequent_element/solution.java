
package _1838_frequency_of_the_most_frequent_element;

import java.util.Arrays;

class Solution {
    public int maxFrequency(int[] nums, int k) {
        Arrays.sort(nums);
        int max = 0;
        long sum = 0;

        for (int l = 0, r = 0; r < nums.length; ++r) {
            sum += nums[r];
            while (sum + k < (long) nums[r] * (r - l + 1)) {
                sum -= nums[l];
                l++;
            }
            max = Math.max(max, r - l + 1);
        }

        return max;
    }
}

/*
 * https://leetcode.com/problems/frequency-of-the-most-frequent-element/
 */