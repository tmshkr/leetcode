package _977_squares_of_a_sorted_array;

class Solution {
    public int[] sortedSquares(int[] nums) {
        int[] result = new int[nums.length];
        int L = 0;
        int R = nums.length - 1;

        while (L <= R) {
            int left = nums[L];
            int right = nums[R];
            int idx = R - L;
            if (Math.abs(left) > Math.abs(right)) {
                result[idx] = left * left;
                L++;
            } else {
                result[idx] = right * right;
                R--;
            }
        }
        return result;
    }
}

/*
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */