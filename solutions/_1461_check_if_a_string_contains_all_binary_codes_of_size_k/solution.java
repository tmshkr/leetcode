package _1461_check_if_a_string_contains_all_binary_codes_of_size_k;
import java.util.*;

class Solution {
    public boolean hasAllCodes(String s, int k) {
        Set<String> set = new HashSet<>();
        for (int i = 0; i <= s.length() - k; i++) {
            set.add(s.substring(i, i + k));
        }
        return set.size() == Math.pow(2, k);
    }
}
  
/**
 * https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/
 */