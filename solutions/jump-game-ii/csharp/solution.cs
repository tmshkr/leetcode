public class Solution
{
  public int Jump(int[] nums)
  {
    int n = nums.Length;
    int jumps = 0;
    int curEnd = 0;
    int curFarthest = 0;

    for (int i = 0; i < n - 1; i++)
    {
      curFarthest = Math.Max(curFarthest, i + nums[i]);
      if (i == curEnd)
      {
        jumps++;
        curEnd = curFarthest;
      }
    }

    return jumps;
  }
}
