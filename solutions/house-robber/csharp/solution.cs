public class Solution
{
  public int Rob(int[] nums)
  {
    int prevMax = 0;
    int maxSum = 0;

    foreach (var money in nums)
    {
      var temp = maxSum;
      maxSum = Math.Max(prevMax + money, maxSum);
      prevMax = temp;
    }

    return maxSum;
  }
}