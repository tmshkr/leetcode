package _1856_maximum_subarray_min_product;

import java.util.*;

class Solution {
    public int maxSumMinProduct(int[] nums) {
        long res = 0;
        int n = nums.length;
        long[] prefix = new long[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        Stack<Integer> stack = new Stack<Integer>();

        for (int i = 0; i <= nums.length; i++) {
            int num = i < nums.length ? nums[i] : 0;

            while (!stack.isEmpty() && nums[stack.peek()] > num) {
                int min = nums[stack.pop()];
                int last = stack.isEmpty() ? 0 : stack.peek() + 1;
                long sum = prefix[i] - prefix[last];
                res = Math.max(res, min * sum);
            }
            stack.add(i);
        }

        return (int) (res % 1000000007);
    }
}

/*
 * https://leetcode.com/problems/maximum-subarray-min-product/
 */