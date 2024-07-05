package _1512_number_of_good_pairs;

class Solution {
    public int numIdenticalPairs(int[] nums) {
        int[] count = new int[101];
        int result = 0;
        for (int num : nums) {
            result += count[num]++;
        }
        return result;
    }
}

/*
 * https://leetcode.com/problems/number-of-good-pairs/
 */