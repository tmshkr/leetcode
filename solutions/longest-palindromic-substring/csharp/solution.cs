public class Solution
{
  public string LongestPalindrome(string s)
  {
    var longest = "";
    var current = "";

    string expand(int l, int r)
    {
      var palindrome = "";
      while (l >= 0 && r < s.Length && s[l] == s[r])
      {
        palindrome = s.Substring(l, r - l + 1);
        l--;
        r++;
      }
      return palindrome;
    }

    for (var i = 0; i < s.Length; i++)
    {
      current = expand(i, i);
      if (current.Length > longest.Length)
      {
        longest = current;
      }
      current = expand(i, i + 1);
      if (current.Length > longest.Length)
      {
        longest = current;
      }
    }

    return longest;
  }
}