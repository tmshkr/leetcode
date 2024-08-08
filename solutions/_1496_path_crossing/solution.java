package _1496_path_crossing;

import java.util.*;

class Solution {
    public boolean isPathCrossing(String path) {
        Set<List<Integer>> visited = new HashSet<>();
        int x = 0, y = 0;
        visited.add(List.of(x, y));
        for (char step : path.toCharArray()) {
            switch (step) {
                case 'N':
                    y++;
                    break;
                case 'S':
                    y--;
                    break;
                case 'E':
                    x++;
                    break;
                case 'W':
                    x--;
                    break;
            }
            if (!visited.add(List.of(x, y))) {
                return true;
            }
        }
        return false;
    }
}

/*
 * https://leetcode.com/problems/path-crossing/
 */