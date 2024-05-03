
package _767_reorganize_string;

import java.util.*;

class Solution {
    public String reorganizeString(String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[1] - a[1]);
        for (int i = 0; i < 26; i++) {
            if (count[i] > 0) {
                pq.add(new int[] { i, count[i] });
            }
        }

        StringBuilder sb = new StringBuilder();
        while (pq.size() >= 2) {
            int[] a = pq.poll();
            int[] b = pq.poll();
            sb.append((char) (a[0] + 'a'));
            sb.append((char) (b[0] + 'a'));
            if (--a[1] > 0) {
                pq.add(a);
            }
            if (--b[1] > 0) {
                pq.add(b);
            }
        }

        if (!pq.isEmpty()) {
            int[] last = pq.poll();
            if (last[1] > 1) {
                return "";
            }
            sb.append((char) (last[0] + 'a'));
        }

        return sb.toString();
    }
}

/*
 * https://leetcode.com/problems/reorganize-string/
 */