package _2073_time_needed_to_buy_tickets;

class Solution {
    public int timeRequiredToBuy(int[] tickets, int k) {
        int time = 0;

        for (int i = 0; i < tickets.length; i++) {
            if (i <= k) {
                time += Math.min(tickets[i], tickets[k]);
            } else {
                time += Math.min(tickets[i], tickets[k] - 1);
            }
        }
        return time;
    }
}

/**
 * https://leetcode.com/problems/time-needed-to-buy-tickets/
 */