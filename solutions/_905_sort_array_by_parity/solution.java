package _905_sort_array_by_parity;

class Solution {
    public int[] sortArrayByParity(int[] nums) {
        int L = 0;
        for (int R = 0; R < nums.length; R++) {
            if (nums[R] % 2 == 0) {
                int temp = nums[L];
                nums[L] = nums[R];
                nums[R] = temp;
                L++;
            }
        }
        return nums;
    }
}

/**
 * https://leetcode.com/problems/sort-array-by-parity/
 */