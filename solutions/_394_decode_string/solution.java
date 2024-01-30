
package _394_decode_string;

import java.util.Stack;

class Solution {
    public String decodeString(String s) {
        var stack = new Stack<String>();
        var res = new StringBuilder();
        String k = "";

        for (var ch : s.toCharArray()) {
            if (Character.isDigit(ch)) {
                k += ch;
            } else if (ch == '[') {
                stack.push(res.toString());
                stack.push(k);
                res = new StringBuilder();
                k = "";
            } else if (ch == ']') {
                int times = Integer.parseInt(stack.pop());
                var prevRes = new StringBuilder(stack.pop());
                while (times-- > 0) {
                    prevRes.append(res);
                }
                res = prevRes;
            } else {
                res.append(ch);
            }
        }

        return res.toString();
    }
}

/*
 * https://leetcode.com/problems/decode-string/
 */