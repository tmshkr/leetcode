
package _34_find_first_and_last_position_of_element_in_sorted_array;

class Solution {
    public int[] searchRange(int[] nums, int target) {
        int start = search(nums, target, true);
        int end = search(nums, target, false);
        return new int[] { start, end };
    }

    private static int search(int[] nums, int target, boolean leftBias) {
        int L = 0;
        int R = nums.length - 1;
        int i = -1;
        while (L <= R) {
            int mid = L + (R - L) / 2;
            if (target > nums[mid]) {
                L = mid + 1;
            } else if (target < nums[mid]) {
                R = mid - 1;
            } else {
                i = mid;
                if (leftBias) {
                    R = mid - 1;
                } else {
                    L = mid + 1;
                }
            }
        }
        return i;
    }
}

/*
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-
 * sorted-array/
 */