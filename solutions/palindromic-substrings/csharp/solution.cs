public class Solution
{
  public int CountSubstrings(string s)
  {
    var count = 0;

    for (var i = 0; i < s.Length; i++)
    {
      count += countPalindromes(s, i, i);
      count += countPalindromes(s, i, i + 1);
    }

    return count;
  }

  public int countPalindromes(string s, int l, int r)
  {
    var count = 0;

    while (l >= 0 && r < s.Length && s[l] == s[r])
    {
      count++;
      l--;
      r++;
    }
    return count;
  }
}