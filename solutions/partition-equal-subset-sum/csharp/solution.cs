public class Solution
{

  public bool CanPartition(int[] nums)
  {
    var sum = nums.Sum();
    if (sum % 2 != 0)
    {
      return false;
    }
    var target = sum / 2;

    var dp = new bool[target + 1];
    dp[0] = true;

    foreach (var num in nums)
    {
      for (var i = target; i >= num; i--)
      {
        dp[i] = dp[i] || dp[i - num];
      }
    }

    return dp[target];
  }
}