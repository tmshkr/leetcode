public class Solution
{
  public int Rob(int[] nums)
  {
    if (nums.Length == 1)
    {
      return nums[0];
    }
    var a = new ArraySegment<int>(nums, 0, nums.Length - 1);
    var b = new ArraySegment<int>(nums, 1, nums.Length - 1);
    return Math.Max(getMax(a), getMax(b));
  }

  private int getMax(ArraySegment<int> nums)
  {
    int prevMax = 0;
    int maxSum = 0;

    foreach (var money in nums)
    {
      var temp = Math.Max(money + prevMax, maxSum);
      prevMax = maxSum;
      maxSum = temp;
    }

    return maxSum;
  }
}