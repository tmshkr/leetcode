package _1443_minimum_time_to_collect_all_apples_in_a_tree;

import java.util.*;

class Solution {
    Map<Integer, List<Integer>> graph = new HashMap<>();
    List<Boolean> hasApple;

    public int minTime(int n, int[][] edges, List<Boolean> hasApple) {
        this.hasApple = hasApple;
        for (int[] edge : edges) {
            graph.computeIfAbsent(edge[0], k -> new ArrayList<>()).add(edge[1]);
            graph.computeIfAbsent(edge[1], k -> new ArrayList<>()).add(edge[0]);
        }
        return dfs(0, -1);
    }

    private int dfs(int node, int prev) {
        int res = 0;
        for (int neighbor : graph.getOrDefault(node, Collections.emptyList())) {
            if (neighbor == prev) {
                continue;
            }
            res += dfs(neighbor, node);
        }
        if ((res > 0 || hasApple.get(node)) && node != 0) {
            res += 2;
        }
        return res;
    }
}

/*
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
 */