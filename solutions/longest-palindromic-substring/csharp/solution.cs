public class Solution
{
  public string LongestPalindrome(string s)
  {
    int[] longest = new int[2]; // [start, length]

    void expand(int l, int r)
    {
      while (l >= 0 && r < s.Length && s[l] == s[r])
      {
        int length = r - l + 1;
        if (length > longest[1])
        {
          longest[0] = l;
          longest[1] = length;
        }
        l--;
        r++;
      }
    }

    for (var i = 0; i < s.Length; i++)
    {
      expand(i, i);
      expand(i, i + 1);
    }

    return s.Substring(longest[0], longest[1]);
  }
}