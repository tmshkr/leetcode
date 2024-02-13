
package _2300_successful_pairs_of_spells_and_potions;

import java.util.Arrays;

class Solution {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        int[] pairs = new int[spells.length];
        Arrays.sort(potions);
        int n = potions.length;

        for (int i = 0; i < spells.length; i++) {
            int L = 0;
            int R = n - 1;
            while (L <= R) {
                int mid = L + (R - L) / 2;
                long product = (long) spells[i] * potions[mid];
                if (product >= success) {
                    R = mid - 1;
                } else {
                    L = mid + 1;
                }
            }

            if (L < n) {
                pairs[i] = n - L;
            }
        }

        return pairs;
    }
}

/*
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
 */