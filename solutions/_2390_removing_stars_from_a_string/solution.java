
package _2390_removing_stars_from_a_string;

import java.util.Stack;

class Solution {
    public String removeStars(String s) {
        var chars = new Stack<Character>();
        for (char c : s.toCharArray()) {
            if (c == '*') {
                chars.pop();
            } else {
                chars.push(c);
            }
        }

        StringBuilder sb = new StringBuilder();
        for (char c : chars) {
            sb.append(c);
        }

        return sb.toString();
    }
}

/*
 * https://leetcode.com/problems/removing-stars-from-a-string/
 */