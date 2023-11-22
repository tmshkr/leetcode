package _14_longest_common_prefix;

class Solution {

  public String longestCommonPrefix(String[] strs) {
    StringBuilder res = new StringBuilder();
    
    for (int i = 0; i < strs[0].length(); i++) {
      Character c = strs[0].charAt(i);
      for (String s : strs) if (
        i == s.length() || s.charAt(i) != c
      ) return res.toString();
      res.append(c);
    }
    return res.toString();
  }
}
