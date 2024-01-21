
package _658_find_k_closest_elements;

import java.util.*;

class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        int L = 0;
        int R = arr.length - 1;

        while (L < R) {
            int idx = (L + R) / 2;
            if (arr[idx] < x) {
                L = idx + 1;
            } else {
                R = idx;
            }
        }

        R = L;
        L -= 1;
        while (R - L - 1 < k) {
            if (L < 0) {
                R++;
            } else if (R >= arr.length) {
                L--;
            } else if (Math.abs(arr[L] - x) <= Math.abs(arr[R] - x)) {
                L--;
            } else {
                R++;
            }
        }

        List<Integer> res = new ArrayList<>();
        for (int i = L + 1; i < R; i++) {
            res.add(arr[i]);
        }

        return res;
    }
}

/*
 * https://leetcode.com/problems/find-k-closest-elements/
 */
