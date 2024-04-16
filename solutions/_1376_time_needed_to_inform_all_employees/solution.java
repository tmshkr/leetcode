
package _1376_time_needed_to_inform_all_employees;

class Solution {
    int[] manager;
    int[] informTime;

    public int numOfMinutes(int n, int headID, int[] manager, int[] informTime) {
        this.informTime = informTime;
        this.manager = manager;
        int max = 0;
        for (int i = 0; i < n; i++) {
            max = Math.max(max, dfs(i));
        }
        return max;
    }

    private int dfs(int i) {
        if (manager[i] != -1) {
            informTime[i] += dfs(manager[i]);
            manager[i] = -1;
        }
        return informTime[i];
    }
}

/*
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 */