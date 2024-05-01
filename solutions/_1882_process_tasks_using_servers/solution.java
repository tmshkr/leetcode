package _1882_process_tasks_using_servers;

import java.util.*;

class Solution {
    public int[] assignTasks(int[] servers, int[] tasks) {
        int[] res = new int[tasks.length];
        PriorityQueue<int[]> available = new PriorityQueue<>((a, b) -> {
            if (a[0] != b[0])
                return a[0] - b[0]; // return the lesser weight
            return a[1] - b[1]; // return the lesser index
        });
        PriorityQueue<int[]> busy = new PriorityQueue<>((a, b) -> {
            if (a[0] != b[0])
                return a[0] - b[0]; // return the lesser time
            if (a[1] != b[1])
                return a[1] - b[1]; // return the lesser weight
            return a[2] - b[2]; // return the lesser index
        });

        for (int idx = 0; idx < servers.length; idx++) {
            int weight = servers[idx];
            available.add(new int[] { weight, idx });
        }

        int time = 0;
        for (int j = 0; j < tasks.length; j++) {
            time = Math.max(time, j);
            while (!busy.isEmpty() && busy.peek()[0] <= time) {
                int[] server = busy.poll();
                int weight = server[1];
                int idx = server[2];
                available.add(new int[] { weight, idx });
            }
            if (available.isEmpty()) {
                time = busy.peek()[0];
                j--;
            } else {
                int[] server = available.poll();
                int weight = server[0];
                int idx = server[1];
                res[j] = server[1];
                busy.add(new int[] { time + tasks[j], weight, idx });
            }
        }
        return res;
    }
}

/*
 * https://leetcode.com/problems/process-tasks-using-servers/
 */