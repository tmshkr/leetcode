
package _349_intersection_of_two_arrays;

import java.util.*;

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        for (int num : nums1) {
            set1.add(num);
        }

        Set<Integer> set2 = new HashSet<>();
        for (int num : nums2) {
            set2.add(num);
        }

        ArrayList<Integer> result = new ArrayList<>();
        for (int num : set1) {
            if (set2.contains(num)) {
                result.add(num);
            }
        }
        return result.stream().mapToInt(i -> i).toArray();
    }
}

/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */