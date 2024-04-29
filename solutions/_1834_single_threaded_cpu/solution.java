package _1834_single_threaded_cpu;

import java.util.*;

class Solution {
    public int[] getOrder(int[][] input) {
        int n = input.length;
        int[][] tasks = new int[n][3];
        for (int i = 0; i < n; i++) {
            tasks[i][0] = input[i][0];
            tasks[i][1] = input[i][1];
            tasks[i][2] = i;
        }
        Arrays.sort(tasks, (a, b) -> a[0] - b[0]);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] == b[1] ? a[2] - b[2] : a[1] - b[1]);
        int[] res = new int[n];
        int idx = 0;
        int time = 0;
        int i = 0;
        while (idx < n) {
            while (i < n && tasks[i][0] <= time) {
                pq.offer(tasks[i]);
                i++;
            }
            if (pq.isEmpty()) {
                time = tasks[i][0];
            } else {
                int[] task = pq.poll();
                res[idx++] = task[2];
                time += task[1];
            }
        }
        return res;
    }
}

/*
 * https://leetcode.com/problems/single-threaded-cpu/
 */