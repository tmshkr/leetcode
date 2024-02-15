package _81_search_in_rotated_sorted_array_ii;

class Solution {
    public boolean search(int[] nums, int target) {
        int L = 0;
        int R = nums.length - 1;

        while (L <= R) {
            int mid = L + (R - L) / 2;
            if (nums[mid] == target) {
                return true;
            }
            if (nums[L] == nums[mid] && nums[mid] == nums[R]) {
                L++;
                R--;
            } else if (nums[L] <= nums[mid]) {
                if (nums[L] <= target && target < nums[mid]) {
                    R = mid - 1;
                } else {
                    L = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[R]) {
                    L = mid + 1;
                } else {
                    R = mid - 1;
                }
            }
        }

        return false;
    }
}

/*
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 */