public class Solution
{
  //T: O(N) , S: O(1)
  public bool CheckValidString(string s)
  {
    var hi = 0;
    var lo = 0;

    foreach (var ch in s)
    {
      if (ch == '(')
      {
        lo++;
        hi++;
      }
      else if (ch == ')')
      {
        hi--;
        lo--;
      }
      else
      {
        lo--;
        hi++;
      }

      lo = Math.Max(lo, 0);
      if (lo > hi)
        return false;
    }

    return lo == 0;
  }
}