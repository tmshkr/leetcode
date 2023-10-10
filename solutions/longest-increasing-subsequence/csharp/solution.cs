public class Solution
{
  public int LengthOfLIS(int[] nums)
  {
    int[] dp = new int[nums.Length];
    Array.Fill(dp, 1);
    int longest = 1;

    for (int i = 1; i < nums.Length; i++)
    {
      int j = 0;
      while (j < i)
      {
        if (nums[j] < nums[i])
        {
          dp[i] = Math.Max(dp[i], 1 + dp[j]);
          longest = Math.Max(longest, dp[i]);
        }
        j++;
      }
    }
    return longest;
  }
}
