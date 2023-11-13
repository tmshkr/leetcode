public class Solution
{
  public int[] CountBits(int n)
  {
    var dp = new int[n + 1];
    for (int i = 0; i <= n; i++)
    {
      dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
  }
}