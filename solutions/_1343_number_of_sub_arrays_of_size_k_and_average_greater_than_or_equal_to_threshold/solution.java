
package _1343_number_of_sub_arrays_of_size_k_and_average_greater_than_or_equal_to_threshold;

class Solution {
    public int numOfSubarrays(int[] arr, int k, int threshold) {
        int count = 0;
        int sum = 0;
        int i = 0;
        int j = 0;
        while (j < arr.length) {
            sum += arr[j];
            if (j - i + 1 == k) {
                if (sum / k >= threshold) {
                    count++;
                }
                sum -= arr[i];
                i++;
            }
            j++;
        }
        return count;
    }
}

/*
 * https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-
 * greater-than-or-equal-to-threshold/
 */