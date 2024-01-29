
package _71_simplify_path;

import java.util.Stack;

class Solution {
    public String simplifyPath(String path) {
        Stack<String> stack = new Stack<>();

        for (String dir : path.split("/")) {
            if (dir.equals("..")) {
                if (!stack.isEmpty()) {
                    stack.pop();
                }
            } else if (!dir.equals(".") && !dir.equals("")) {
                stack.push(dir);
            }
        }

        StringBuilder sb = new StringBuilder();
        for (String dir : stack) {
            sb.append("/");
            sb.append(dir);
        }

        return sb.length() > 0 ? sb.toString() : "/";
    }
}

/*
 * https://leetcode.com/problems/simplify-path/
 */