
package _1985_find_the_kth_largest_integer_in_the_array;

import java.util.Arrays;

class Solution {
    public String kthLargestNumber(String[] nums, int k) {
        Arrays.sort(nums, (a, b) -> {
            return (a.length() == b.length()) ? a.compareTo(b) : a.length() - b.length();
        });
        return nums[nums.length - k];
    }
}

/*
 * https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/
 */