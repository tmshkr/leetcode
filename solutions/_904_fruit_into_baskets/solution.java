
package _904_fruit_into_baskets;

import java.util.HashMap;

class Solution {
    public int totalFruit(int[] fruits) {
        int res = 0;
        int l = 0;
        var count = new HashMap<Integer, Integer>();

        for (int r = 0; r < fruits.length; r++) {
            int fruit = fruits[r];
            count.put(fruit, count.getOrDefault(fruit, 0) + 1);
            while (count.size() > 2) {
                int lastFruit = fruits[l];
                count.put(lastFruit, count.get(lastFruit) - 1);
                if (count.get(lastFruit) == 0)
                    count.remove(lastFruit);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}

/*
 * https://leetcode.com/problems/fruit-into-baskets/
 */