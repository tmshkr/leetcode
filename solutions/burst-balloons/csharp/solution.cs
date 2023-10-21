public class Solution
{
  public int MaxCoins(int[] nums)
  {
    int n = nums.Length;
    int[,] dp = new int[n + 2, n + 2];
    int[] paddedNums = new int[n + 2];
    paddedNums[0] = paddedNums[n + 1] = 1;
    for (int i = 0; i < n; i++)
    {
      paddedNums[i + 1] = nums[i];
    }

    for (int len = 1; len <= n; len++)
    {
      for (int i = 1; i <= n - len + 1; i++)
      {
        int j = i + len - 1;
        for (int k = i; k <= j; k++)
        {
          dp[i, j] = Math.Max(dp[i, j], dp[i, k - 1] + paddedNums[i - 1] * paddedNums[k] * paddedNums[j + 1] + dp[k + 1, j]);
        }
      }
    }
    return dp[1, n];
  }
}
