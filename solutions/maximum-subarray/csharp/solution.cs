public class Solution
{
  public int MaxSubArray(int[] nums)
  {
    int res = nums[0];
    int total = 0;

    foreach (int num in nums)
    {
      total += num;
      res = Math.Max(res, total);
      total = Math.Max(0, total);
    }
    return res;
  }
}