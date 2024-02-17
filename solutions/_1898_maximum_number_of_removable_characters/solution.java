
package _1898_maximum_number_of_removable_characters;

class Solution {
    public int maximumRemovals(String s, String p, int[] removable) {
        int L = 0;
        int R = removable.length;
        while (L < R) {
            int mid = L + (R - L) / 2;
            if (isSubsequence(s, p, removable, mid + 1)) {
                L = mid + 1;
            } else {
                R = mid;
            }
        }
        return L;
    }

    private boolean isSubsequence(String s, String p, int[] removable, int k) {
        boolean[] removed = new boolean[s.length()];
        for (int i = 0; i < k; i++) {
            removed[removable[i]] = true;
        }
        int j = 0;
        for (int i = 0; i < s.length() && j < p.length(); i++) {
            if (!removed[i] && s.charAt(i) == p.charAt(j)) {
                j++;
            }
        }
        return j == p.length();
    }
}

/*
 * https://leetcode.com/problems/maximum-number-of-removable-characters/
 */