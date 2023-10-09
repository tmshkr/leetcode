public class Solution
{
  public bool WordBreak(string s, IList<string> wordDict)
  {
    bool[] dp = new bool[s.Length + 1];
    Array.Fill(dp, false);
    dp[0] = true;

    for (int i = 0; i < s.Length; i++)
    {
      if (!dp[i]) continue;
      foreach (var w in wordDict)
      {
        if (i + w.Length <= s.Length && s.Substring(i, w.Length) == w)
          dp[i + w.Length] = true;
      }
    }
    return dp[s.Length];
  }
}
