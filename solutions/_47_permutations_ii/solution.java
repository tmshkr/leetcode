package _47_permutations_ii;

import java.util.*;

class Solution {
    List<List<Integer>> res = new ArrayList<>();
    boolean[] visited;
    int[] nums;

    public List<List<Integer>> permuteUnique(int[] nums) {
        this.nums = nums;
        visited = new boolean[nums.length];
        Arrays.sort(nums);
        backtrack(new ArrayList<>());
        return res;
    }

    private void backtrack(List<Integer> perm) {
        if (perm.size() == nums.length) {
            res.add(new ArrayList<>(perm));
        } else {
            for (int i = 0; i < nums.length; i++) {
                if (visited[i] || i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) {
                    continue;
                }
                visited[i] = true;
                perm.add(nums[i]);
                backtrack(perm);
                visited[i] = false;
                perm.remove(perm.size() - 1);
            }
        }
    }
}

/*
 * https://leetcode.com/problems/permutations-ii/
 */