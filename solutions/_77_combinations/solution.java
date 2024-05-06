package _77_combinations;

import java.util.*;

class Solution {
    int n;
    int k;
    List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> combine(int n, int k) {
        this.n = n;
        this.k = k;
        backtrack(1, new ArrayList<>());
        return res;
    }

    private void backtrack(int start, List<Integer> path) {
        if (path.size() == k) {
            res.add(new ArrayList<>(path));
        } else {
            for (int i = start; i <= n; i++) {
                path.add(i);
                backtrack(i + 1, path);
                path.remove(path.size() - 1);
            }
        }
    }
}

/*
 * https://leetcode.com/problems/combinations/
 */