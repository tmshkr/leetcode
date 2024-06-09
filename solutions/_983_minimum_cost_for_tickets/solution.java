package _983_minimum_cost_for_tickets;

import java.util.*;

class Solution {
    public int mincostTickets(int[] days, int[] costs) {
        int[] dp = new int[days[days.length - 1] + 1];
        Set<Integer> set = new HashSet<>();
        for (int day : days) {
            set.add(day);
        }

        for (int i = 1; i < dp.length; i++) {
            if (set.contains(i)) {
                dp[i] = Math.min(
                        dp[i - 1] + costs[0],
                        Math.min(
                                dp[Math.max(0, i - 7)] + costs[1],
                                dp[Math.max(0, i - 30)] + costs[2]));
            } else {
                dp[i] = dp[i - 1];
            }
        }
        return dp[dp.length - 1];
    }
}

/*
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 */