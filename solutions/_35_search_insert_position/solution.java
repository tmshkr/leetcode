
package _35_search_insert_position;

class Solution {
    public int searchInsert(int[] nums, int target) {
        int lo = 0;
        int hi = nums.length;

        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (target > nums[mid]) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }

        return lo;
    }
}

/*
 * https://leetcode.com/problems/search-insert-position/
 */