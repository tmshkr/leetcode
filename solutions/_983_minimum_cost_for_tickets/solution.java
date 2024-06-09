package _983_minimum_cost_for_tickets;

class Solution {
    public int mincostTickets(int[] days, int[] costs) {
        int[] dp = new int[days[days.length - 1] + 1];
        int i = 0;
        for (int day = 1; day < dp.length; day++) {
            if (day < days[i]) {
                dp[day] = dp[day - 1];
            } else {
                i++;
                dp[day] = Math.min(
                        dp[day - 1] + costs[0],
                        Math.min(
                                dp[Math.max(0, day - 7)] + costs[1],
                                dp[Math.max(0, day - 30)] + costs[2]));
            }
        }
        return dp[dp.length - 1];
    }
}

/*
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 */