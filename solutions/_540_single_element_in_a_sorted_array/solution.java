
package _540_single_element_in_a_sorted_array;

class Solution {
    public int singleNonDuplicate(int[] nums) {
        int L = 0;
        int R = nums.length - 1;

        while (L < R) {
            int mid = L + (R - L) / 2;
            boolean halvesAreEven = (R - mid) % 2 == 0;
            if (nums[mid + 1] == nums[mid]) {
                if (halvesAreEven) {
                    L = mid + 2;
                } else {
                    R = mid - 1;
                }
            } else if (nums[mid - 1] == nums[mid]) {
                if (halvesAreEven) {
                    R = mid - 2;
                } else {
                    L = mid + 1;
                }
            } else {
                return nums[mid];
            }
        }

        return nums[L];
    }
}

/*
 * https://leetcode.com/problems/single-element-in-a-sorted-array/
 */