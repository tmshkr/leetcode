
package _2542_maximum_subsequence_score;

import java.util.*;

class Solution {
    public long maxScore(int[] A, int[] B, int k) {
        long total = 0;
        long res = 0;
        int n = A.length;
        int[][] pairs = new int[n][2];
        for (int i = 0; i < n; i++) {
            pairs[i] = new int[] { A[i], B[i] };
        }
        Arrays.sort(pairs, (a, b) -> b[1] - a[1]);
        Queue<Integer> pq = new PriorityQueue<Integer>(k);
        for (int[] pair : pairs) {
            int a = pair[0];
            int b = pair[1];
            pq.add(a);
            total += a;
            if (pq.size() == k) {
                res = Math.max(res, total * b);
                total -= pq.poll();
            }
        }
        return res;
    }
}

/*
 * https://leetcode.com/problems/maximum-subsequence-score/
 */