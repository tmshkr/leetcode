
package _93_restore_ip_addresses;

import java.util.ArrayList;
import java.util.List;

class Solution {
    String s; // input string
    List<String> res = new ArrayList<>(); // result
    List<String> path = new ArrayList<>(); // current path

    public List<String> restoreIpAddresses(String s) {
        this.s = s;
        backtrack(0);
        return res;
    }

    private void backtrack(int start) {
        if (path.size() == 4) {
            if (start == s.length()) {
                res.add(String.join(".", path));
            }
        } else {
            for (int i = 1; i <= 3; i++) {
                if (start + i > s.length())
                    break;
                if (i > 1 && s.charAt(start) == '0')
                    break;
                String octet = s.substring(start, start + i);
                if (Integer.parseInt(octet) <= 255) {
                    path.add(octet);
                    backtrack(start + i);
                    path.remove(path.size() - 1);
                }
            }
        }
    }
}

/*
 * https://leetcode.com/problems/restore-ip-addresses/
 */