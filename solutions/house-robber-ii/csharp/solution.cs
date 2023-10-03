public class Solution
{
  public int Rob(int[] nums)
  {
    if (nums.Length == 1)
    {
      return nums[0];
    }
    return Math.Max(getMax(nums, 0, nums.Length - 1), getMax(nums, 1, nums.Length));
  }

  private int getMax(int[] nums, int start, int end)
  {
    int prevMax = 0;
    int maxSum = 0;

    for (int i = start; i < end; i++)
    {
      var temp = Math.Max(nums[i] + prevMax, maxSum);
      prevMax = maxSum;
      maxSum = temp;
    }

    return maxSum;
  }
}